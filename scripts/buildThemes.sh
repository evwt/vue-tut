#!/bin/bash

sass themes/vue.scss dist/themes/vue.css
sass themes/azure.scss dist/themes/azure.css
mkdir -p dist/code-themes
cp src/style/code-theme/vue.css dist/code-themes
cp node_modules/prismjs/themes/*.css dist/code-themes
cp node_modules/prism-themes/themes/prism-*.css dist/code-themes/

cd dist/code-themes

for name in prism-*
do
    newname="$(echo "$name" | cut -c7-)"
    mv "$name" "$newname"
done

cd ../..

