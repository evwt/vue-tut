#!/bin/bash

cp README.md docs/

npm run docs:vuese

for name in docs/components/*
do
  tail -n +3 "$name" > "$name.tmp" && mv "$name.tmp" "$name"
done

for value in Tutorial TutorialSection TutorialStep TutorialHighlighter
do
  cat markdown/$value.md docs/components/$value.md > docs/components/$value.md.tmp
  mv docs/components/$value.md.tmp docs/components/$value.md
done


