@echo off
echo ========================================
echo GitHub Repository Setup
echo ========================================
echo.

REM Check if git is available
where git >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Git is not installed or not in PATH.
    echo.
    echo Please install Git from: https://git-scm.com/download/win
    echo Make sure to select "Add Git to PATH" during installation.
    echo.
    pause
    exit /b 1
)

echo Git found! Proceeding with setup...
echo.

REM Initialize git if not already done
if not exist ".git" (
    echo Initializing git repository...
    git init
    echo.
)

REM Add all files
echo Adding files to git...
git add .
echo.

REM Check if there are changes to commit
git diff --cached --quiet
if %ERRORLEVEL% NEQ 0 (
    echo Creating initial commit...
    git commit -m "Initial commit: Portfolio website"
    echo Commit created successfully!
    echo.
) else (
    echo No changes to commit.
    echo.
)

echo ========================================
echo Next Steps:
echo ========================================
echo.
echo 1. Create a new repository on GitHub:
echo    Go to: https://github.com/new
echo    Name: portfolio-website
echo    DO NOT initialize with README, .gitignore, or license
echo.
echo 2. Run these commands:
echo    git remote add origin https://github.com/nikhilgiridharan/portfolio-website.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo ========================================
pause
