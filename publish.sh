#!/bin/sh

set -e
pnpm build
cd ./lib || exit 1

pnpm publish

BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ "$BRANCH" = "dev" ]; then
    pnpm publish --access public --tag rc
else
    pnpm publish --access public
fi
