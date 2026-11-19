#!/usr/bin/env bash
set -e

REPO_NAME="AssistHire"
DESCRIPTION="AssistHire - Smart Talent & Interview Assistant (Next.js + FastAPI)"
IS_PRIVATE=false

echo "=========================================="
echo "AssistHire - GitHub Repository Setup"
echo "=========================================="

if [ -z "$GITHUB_TOKEN" ]; then
    echo -n "Enter your GitHub Personal Access Token (classic with 'repo' scope, or fine-grained with 'Administration' & 'Contents' read/write): "
    read -r -s GITHUB_TOKEN
    echo ""
fi

if [ -z "$GITHUB_TOKEN" ]; then
    echo "Error: GitHub token is required."
    exit 1
fi

echo "Verifying GitHub credentials..."
USER_RESPONSE=$(curl -s -H "Authorization: Bearer $GITHUB_TOKEN" -H "Accept: application/vnd.github+json" https://api.github.com/user)
GITHUB_USER=$(echo "$USER_RESPONSE" | grep -m 1 '"login":' | sed -E 's/.*"login": *"([^"]+)".*/\1/')

if [ -z "$GITHUB_USER" ]; then
    echo "Error: Failed to authenticate with GitHub. Response:"
    echo "$USER_RESPONSE"
    exit 1
fi

echo "Authenticated as: $GITHUB_USER"

echo "Creating GitHub repository '$REPO_NAME'..."
CREATE_RESPONSE=$(curl -s -X POST \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/user/repos \
  -d "{\"name\":\"$REPO_NAME\",\"description\":\"$DESCRIPTION\",\"private\":$IS_PRIVATE}")

REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"
REMOTE_AUTH_URL="https://$GITHUB_USER:$GITHUB_TOKEN@github.com/$GITHUB_USER/$REPO_NAME.git"

echo "Configuring git remote 'origin'..."
git remote remove origin 2>/dev/null || true
git remote add origin "$REMOTE_AUTH_URL"

echo "Pushing main branch to $REPO_URL..."
git push -u origin main

# Switch remote to clean URL without embedded token in config
git remote set-url origin "$REPO_URL"

echo ""
echo "✅ Successfully created and pushed to: https://github.com/$GITHUB_USER/$REPO_NAME"
