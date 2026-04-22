@echo off
REM Launch the local dev loop through Git Bash (bypasses WSL entirely).
REM Double-click this file from File Explorer, or run from CMD: dev.bat
"C:\Program Files\Git\bin\bash.exe" -c "cd '%~dp0' && npm run dev"
pause
