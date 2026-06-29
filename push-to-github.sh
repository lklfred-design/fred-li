#!/bin/bash
# Push P1 fix files to GitHub Pages
# Run this script after setting up git credentials (PAT or SSH)
#
# Option A: Set up a GitHub Personal Access Token (PAT)
#   1. Go to https://github.com/settings/tokens
#   2. Create a new token with "repo" scope
#   3. Run: git remote set-url origin https://<YOUR_PAT>@github.com/lklfred-design/fred-li.git
#   4. Run this script: bash push-to-github.sh
#
# Option B: Set up SSH key
#   1. Generate key: ssh-keygen -t ed25519 -C "fred@gobi.vc"
#   2. Add to GitHub: https://github.com/settings/ssh/new
#   3. Run: git remote set-url origin git@github.com:lklfred-design/fred-li.git
#   4. Run this script: bash push-to-github.sh
#
# Option C: Use GitHub connector with write access
#   1. Go to WorkBuddy connector settings
#   2. Find the GitHub connector and grant "contents:write" permission for lklfred-design/fred-li
#   3. Then ask Nova to push again

set -e

REPO_DIR="/Users/fredli/WorkBuddy/2026-06-29-22-12-10/fred-li-site"
cd "$REPO_DIR"

echo "Current git status:"
git status --short

echo ""
echo "Pushing to origin main..."
git push origin main

echo ""
echo "Done! Check your site at: https://lklfred-design.github.io/fred-li/"
echo "GitHub Pages may take 1-3 minutes to update."
