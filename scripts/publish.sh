#!/usr/bin/env bash
# PUBLISH antiloki.com (2026-09-21): the public branch carries ONLY the public pages — index.html, img/, CNAME —
# never the marketing kit or this repo's history. Run after committing on main:  scripts/publish.sh
set -euo pipefail
cd "$(dirname "$0")/.."
tmp="$(mktemp -d)"
git worktree add -q --detach "$tmp" 2>/dev/null || true
( cd "$tmp" && git checkout -q --orphan pages-publish && git rm -rqf --cached . >/dev/null 2>&1 || true; rm -rf "$tmp"/* )
cp index.html CNAME "$tmp"/ && cp -r img "$tmp"/img
( cd "$tmp" && git add -A && git -c user.email="$(git -C "$OLDPWD" config user.email)" -c user.name="$(git -C "$OLDPWD" config user.name)" commit -q -m "antiloki.com · $(date -u +%Y-%m-%dT%H:%MZ) · $(git -C "$OLDPWD" log -1 --format=%s | cut -c1-72)" && git push -q -f origin HEAD:main )
git worktree remove -f "$tmp"; git branch -D pages-publish >/dev/null 2>&1 || true
echo "published → https://antiloki.com (GitHub Pages builds in ~1 min)"
