#!/usr/bin/env python3
"""
export-whatsapp-history.py
==========================
Export WhatsApp message history from the local whatsapp-mcp SQLite store
to per-chat markdown snapshots in Drive.

Solves the WhatsApp 29-day group-message expiry problem at $0/mo by leveraging
the local SQLite database the whatsapp-mcp bridge already maintains. The bridge
writes every received/sent message to messages.db with no expiry, so as long
as the bridge runs periodically the local store is the canonical archive.

USAGE
-----
    # Export ALL chats since the last run (incremental):
    python export-whatsapp-history.py

    # Export ALL chats from scratch (full history):
    python export-whatsapp-history.py --full

    # Export a single chat by JID:
    python export-whatsapp-history.py --jid 120363408532234466@g.us

    # Export only the MAG Posse group (default helper):
    python export-whatsapp-history.py --posse-only

    # Export messages since a specific date (overrides --full):
    python export-whatsapp-history.py --since 2026-04-01

OUTPUT
------
- One markdown file per chat per export run, written to:
  G:/My Drive/Work/Work with Rob/MAG Documents/MAG WhatsApp Snapshots/
  Format: {chat-name}-{YYYY-MM-DD}.md  (or {jid}-{YYYY-MM-DD}.md if name missing)

SCHEDULING (recommended)
------------------------
Run weekly. On Windows: schtasks /Create /TN "MAG-WhatsApp-Export"
  /TR "python C:\\Users\\seanl\\Documents\\Work\\MAG Website Dev\\scripts\\export-whatsapp-history.py"
  /SC WEEKLY /D MON /ST 09:00

Or use Claude's mcp__scheduled-tasks__create_scheduled_task to wrap it.
"""

from __future__ import annotations

import argparse
import os
import re
import sqlite3
import sys
from datetime import datetime, timedelta
from pathlib import Path

# ---- CONFIG ---------------------------------------------------------------

DB_PATH = Path(
    r"C:\Users\seanl\Documents\Work\MCP Servers\whatsapp-mcp\whatsapp-bridge\store\messages.db"
)
OUTPUT_DIR = Path(
    r"G:\My Drive\Work\Work with Rob\MAG Documents\MAG WhatsApp Snapshots"
)
LAST_RUN_FILE = OUTPUT_DIR / ".last_export.txt"
POSSE_JID = "120363408532234466@g.us"

# ---- HELPERS --------------------------------------------------------------

def slugify(text: str) -> str:
    """Lowercase + non-alphanumerics → '-' + trim to 60 chars."""
    if not text:
        return ""
    s = re.sub(r"[^a-zA-Z0-9]+", "-", text.lower()).strip("-")
    return s[:60] or "untitled"


def fmt_sender(jid: str, sender: str, is_from_me: int) -> str:
    if is_from_me:
        return "Sean"
    # Group messages: sender is the participant phone number
    return sender or jid


def fmt_message(row: sqlite3.Row) -> str:
    ts = row["timestamp"]
    who = fmt_sender(row["chat_jid"], row["sender"], row["is_from_me"])
    media = row["media_type"]
    content = (row["content"] or "").rstrip()

    if media:
        # Media message — flag the type
        media_label = f" *(media: {media}"
        if row["filename"]:
            media_label += f", {row['filename']}"
        media_label += ")*"
        return f"**[{ts}] {who}**{media_label}  \n{content}\n" if content else f"**[{ts}] {who}**{media_label}\n"
    return f"**[{ts}] {who}**: {content}\n"


def export_chat(conn: sqlite3.Connection, jid: str, since: str | None) -> Path | None:
    """Export one chat to a markdown file. Returns the path written, or None if no messages."""
    cur = conn.cursor()
    cur.row_factory = sqlite3.Row

    # Chat metadata
    chat_row = cur.execute(
        "SELECT name, last_message_time FROM chats WHERE jid = ?", (jid,)
    ).fetchone()
    if not chat_row:
        print(f"  WARN: no chat row for {jid}", file=sys.stderr)
        return None
    chat_name = chat_row["name"] or jid

    # Messages
    if since:
        msg_rows = cur.execute(
            "SELECT * FROM messages WHERE chat_jid = ? AND timestamp >= ? ORDER BY timestamp ASC",
            (jid, since),
        ).fetchall()
    else:
        msg_rows = cur.execute(
            "SELECT * FROM messages WHERE chat_jid = ? ORDER BY timestamp ASC", (jid,)
        ).fetchall()

    if not msg_rows:
        return None

    # Output filename
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    today = datetime.now().strftime("%Y-%m-%d")
    out_path = OUTPUT_DIR / f"{slugify(chat_name)}-{today}.md"

    # Front matter + body
    with out_path.open("w", encoding="utf-8") as f:
        f.write(f"---\n")
        f.write(f'chat: "{chat_name}"\n')
        f.write(f"jid: {jid}\n")
        f.write(f"exported: {datetime.now().isoformat(timespec='seconds')}\n")
        f.write(f"messages: {len(msg_rows)}\n")
        if since:
            f.write(f"since: {since}\n")
        f.write(f"source: {DB_PATH}\n")
        f.write(f"---\n\n")
        f.write(f"# {chat_name}\n\n")
        f.write(f"_Snapshot of {len(msg_rows)} messages")
        if since:
            f.write(f" since {since}")
        f.write(f"_\n\n")
        for row in msg_rows:
            f.write(fmt_message(row))
            f.write("\n")

    return out_path


def get_last_run() -> str | None:
    if LAST_RUN_FILE.exists():
        return LAST_RUN_FILE.read_text(encoding="utf-8").strip()
    return None


def write_last_run() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    LAST_RUN_FILE.write_text(datetime.now().strftime("%Y-%m-%d"), encoding="utf-8")


# ---- MAIN -----------------------------------------------------------------

def main() -> int:
    parser = argparse.ArgumentParser(description="Export WhatsApp history to Drive")
    parser.add_argument("--full", action="store_true", help="Export all messages (ignore last run)")
    parser.add_argument("--since", help="Export messages since YYYY-MM-DD (overrides --full)")
    parser.add_argument("--jid", help="Export only this chat JID")
    parser.add_argument("--posse-only", action="store_true", help=f"Export only the MAG Posse group ({POSSE_JID})")
    args = parser.parse_args()

    if not DB_PATH.exists():
        print(f"ERROR: messages.db not found at {DB_PATH}", file=sys.stderr)
        print("Is the whatsapp-mcp bridge running and synced?", file=sys.stderr)
        return 2

    # Determine `since` cutoff
    if args.since:
        since = args.since
    elif args.full:
        since = None
    else:
        last = get_last_run()
        if last:
            # Re-export 1 day overlap to catch messages that arrived right after the last run
            since_dt = datetime.strptime(last, "%Y-%m-%d") - timedelta(days=1)
            since = since_dt.strftime("%Y-%m-%d")
        else:
            since = None  # First run = full export

    # Determine which chats to export
    conn = sqlite3.connect(str(DB_PATH))
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    if args.jid:
        jids = [args.jid]
    elif args.posse_only:
        jids = [POSSE_JID]
    else:
        jids = [r["jid"] for r in cur.execute("SELECT jid FROM chats ORDER BY last_message_time DESC")]

    print(f"DB: {DB_PATH}")
    print(f"Output: {OUTPUT_DIR}")
    print(f"Chats to export: {len(jids)}")
    print(f"Since: {since or '(full history)'}")
    print()

    written = 0
    skipped = 0
    for jid in jids:
        try:
            out = export_chat(conn, jid, since)
            if out:
                print(f"  OK   {out.name} ({jid})")
                written += 1
            else:
                skipped += 1
        except Exception as e:
            print(f"  ERR  {jid}: {e}", file=sys.stderr)

    write_last_run()

    print()
    print(f"Wrote: {written}  Skipped (no messages): {skipped}")
    print(f"Last-run timestamp: {LAST_RUN_FILE}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
