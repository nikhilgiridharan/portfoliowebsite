# GitHub Repository Setup Script
# This script will initialize a git repository and prepare it for pushing to GitHub

Write-Host "Setting up GitHub repository..." -ForegroundColor Green

# Check if git is installed
try {
    $gitVersion = git --version
    Write-Host "Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Git is not installed or not in PATH." -ForegroundColor Red
    Write-Host "Please install Git from https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Navigate to project directory
$projectPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectPath

# Initialize git repository if not already initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
} else {
    Write-Host "Git repository already initialized." -ForegroundColor Green
}

# Add all files
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    Write-Host "Creating initial commit..." -ForegroundColor Yellow
    git commit -m "Initial commit: Portfolio website"
    Write-Host "Commit created successfully!" -ForegroundColor Green
} else {
    Write-Host "No changes to commit." -ForegroundColor Yellow
}

# Display next steps
Write-Host "`n=== Next Steps ===" -ForegroundColor Cyan
Write-Host "1. Go to https://github.com/new and create a new repository named 'portfolio-website'" -ForegroundColor White
Write-Host "2. DO NOT initialize it with a README, .gitignore, or license" -ForegroundColor White
Write-Host "3. After creating the repository, run these commands:" -ForegroundColor White
Write-Host "`n   git remote add origin https://github.com/nikhilgiridharan/portfolio-website.git" -ForegroundColor Yellow
Write-Host "   git branch -M main" -ForegroundColor Yellow
Write-Host "   git push -u origin main" -ForegroundColor Yellow
Write-Host "`nOr if you prefer SSH:" -ForegroundColor White
Write-Host "   git remote add origin git@github.com:nikhilgiridharan/portfolio-website.git" -ForegroundColor Yellow
Write-Host "   git branch -M main" -ForegroundColor Yellow
Write-Host "   git push -u origin main" -ForegroundColor Yellow
