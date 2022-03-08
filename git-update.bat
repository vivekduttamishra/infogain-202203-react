@echo off

git add .
echo committing: %2
git commit -m "%*"
git push -u origin main
