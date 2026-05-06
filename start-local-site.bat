@echo off
REM Start MAG local dev: browser-sync serves root, opens default browser,
REM auto-reloads on save. Runs through Git Bash explicitly so Windows CMD
REM never invokes the disabled WSL bash.
title MAG Local Dev
echo Starting MAG local dev server...
echo Browser should open automatically at http://localhost:3000/
echo Press Ctrl+C to stop.
echo.
"C:\Program Files\Git\bin\bash.exe" -c "cd '%~dp0' && npm run dev"
pause
