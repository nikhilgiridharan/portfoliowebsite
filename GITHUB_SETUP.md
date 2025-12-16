# GitHub Repository Setup Guide

## Step 1: Install Git (if not already installed)

Download and install Git from: https://git-scm.com/download/win

During installation, make sure to select "Add Git to PATH" option.

## Step 2: Open PowerShell or Command Prompt

Navigate to your project directory:
```powershell
cd "C:\Users\Nick G\portfolio-website"
```

## Step 3: Initialize Git Repository

```bash
git init
```

## Step 4: Add All Files

```bash
git add .
```

## Step 5: Create Initial Commit

```bash
git commit -m "Initial commit: Portfolio website"
```

## Step 6: Create Repository on GitHub

1. Go to: https://github.com/new
2. Repository name: `portfolio-website`
3. Description (optional): "Personal portfolio website"
4. Choose Public or Private
5. **DO NOT** check "Add a README file", "Add .gitignore", or "Choose a license"
6. Click "Create repository"

## Step 7: Connect Local Repository to GitHub

```bash
git remote add origin https://github.com/nikhilgiridharan/portfolio-website.git
git branch -M main
```

## Step 8: Push to GitHub

```bash
git push -u origin main
```

You will be prompted for your GitHub username and password. 
**Note:** If you have 2FA enabled, you'll need to use a Personal Access Token instead of your password.

### Creating a Personal Access Token (if needed):

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name like "Portfolio Website"
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token and use it as your password when pushing

## Alternative: Using GitHub CLI (gh)

If you have GitHub CLI installed:

```bash
gh repo create portfolio-website --public --source=. --remote=origin --push
```

## Troubleshooting

- If you get "fatal: not a git repository", make sure you're in the project directory
- If authentication fails, use a Personal Access Token instead of password
- If you get "remote origin already exists", remove it first: `git remote remove origin`
