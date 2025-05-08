#!/bin/bash
set -e

BRANCH=$(git rev-parse --abbrev-ref HEAD)
VERSION=$(node -p "require('./package.json').version")

# Detect if version is a prerelease (has hyphen)
if [[ "$VERSION" == *-* ]]; then
    echo "Detected prerelease version: $VERSION"
    pnpm publish --access public --tag rc
else
    if [ "$BRANCH" = "dev" ]; then
        pnpm publish --access public --tag rc
    else
        pnpm publish --access public
    fi
fi
