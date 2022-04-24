---
date:
- 2022-04-16
icon: 📝
category: development
tags:
- webdev
subtitle: placeholder
title: hugo
categories: development
lastMod: 2022-04-23
---
The plan is to collect useful snippets and code-examples to help creating and maintaining a [pkm]({{< ref "pkm" >}}) in Hugo (and posibly [Logseq]({{< ref "Logseq" >}})).

### Automating import

To import pages from [logseq]({{< ref "logseq" >}}):

```bash
#!/usr/bin/env bash

BLOG=$HOME/Documents/QWxleA.github.io
NOTES=$BLOG/content/notes
ASSETS="$BLOG/content/notes/assets"
HUGOASSETS=$BLOG/static/assets

STARTPAGE="$NOTES/Start here.md"

ZIP=$HOME/Downloads/publicExport.zip

explode() {
    # rm $NOTES/*.md 
    unzip -o -d $NOTES $ZIP
    if [ -d "$ASSETS"  ]; then
        for a in $ASSETS/*; do 
            mv "$a" $HUGOASSETS
        done
        rmdir "$ASSETS"
    fi
    # FIXME
    if [ -f "$STARTPAGE" ]; then
        mv "$STARTPAGE" "$BLOG/content/_index.md"
        #FIXME relative path?
        gsed -i "s@relref \"@relref \"\/notes\/@g" "$BLOG/content/_index.md"
    fi
}

usage() { echo "Usage: $0 [-s <45|90>] [-p <string>]" 1>&2; exit 1; }

while getopts "lx" o; do
    case "${o}" in
        l)
            unzip -v $ZIP
            exit
            ;;
        x)
            explode
            exit
            ;;
        *)
            usage
            ;;
    esac
done
shift $((OPTIND-1))

usage
```

### Makefile to simplify working with Hugo

Makefiles are simple, just type `make`

```makefile
SHELL := /bin/bash
.POSIX:
.PHONY: push update watch
all: help

help: ## Show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

push: ## Push pages to github / upstream
	git push origin master

update: ## Add new items / prepare to push upstream
	hugo
	git add .

watch: ## Run the local development server
	hugo --buildDrafts --watch server --disableFastRender --ignoreCache

import: ## Import latest Logseq pages
	./scripts/export-blog -x
```
