#!/bin/bash
set -e

BRANCH=$(git rev-parse --abbrev-ref HEAD)
CURRENT_VERSION=$(node -p "require('./package.json').version")

# If we're on dev and version is NOT already prerelease, append -rc.0
if [ "$BRANCH" = "dev" ] && [[ "$CURRENT_VERSION" != *-* ]]; then
    RC_VERSION="${CURRENT_VERSION}-rc.0"

    echo "Dev branch detected. Bumping version to $RC_VERSION"

    npm version "$RC_VERSION" --no-git-tag-version
    pnpm publish --access public --tag rc

# If version is already prerelease (rc, beta, etc.)
elif [[ "$CURRENT_VERSION" == *-* ]]; then
    echo "Prerelease detected: $CURRENT_VERSION"
    pnpm publish --access public --tag rc

# Normal release
else
    echo "Stable release: $CURRENT_VERSION"
    pnpm publish --access public
fi
