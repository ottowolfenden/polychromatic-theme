#!/bin/bash

set -e

cd "$(dirname "${BASH_SOURCE[0]}")"

oldvsixs=(polychromatic-theme-*.vsix)
readme="README.md"
oldreadme=$(mktemp)

cp "$readme" "$oldreadme"

restore() { cp "$oldreadme" "$readme"; rm -f "$oldreadme"; }

trap restore EXIT

sed -i '/<!-- begin githubonly -->/a <!--' "$readme"
sed -i '/<!-- end githubonly -->/i -->' "$readme"

vsce package

echo "${oldvsixs[@]}"

rm -f "${oldvsixs[@]}"
