#!/bin/bash

set -e

file="README.md"
backup=$(mktemp)

cp "$file" "$backup"

restore() { cp "$backup" "$file"; rm -f "$backup"; }

trap restore EXIT

sed -i '/<!-- begin githubonly -->/a <!--' "$file"
sed -i '/<!-- end githubonly -->/i -->' "$file"

vsce package