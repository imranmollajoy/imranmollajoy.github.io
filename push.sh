#!/bin/sh
if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi
#pnpm run build && pnpm run postbuild && pnpm run deploy && git pull && git add -f --all build/ &&git subtree push --prefix $1 origin gh-pages
pnpm run build && pnpm run deploy && git pull && git add -f --all build/ &&git subtree push --prefix $1 origin gh-pages