+++
title = "Git notes"
author = ["Alex Qwxlea"]
date = 2020-12-24T23:58:00+02:00
tags = ["git"]
draft = false
+++

Notes to keep track of things I don't do all that often.


## Working with git submodule {#working-with-git-submodule}

Adding a submodule is very simple, here I add a theme to this site:

```shell
git submodule add https://github.com/monkeyWzr/hugo-theme-cactus.git themes/cactus
```

Updating as well:

```shell
git submodule update --remote --merge
```

Removing, not so much, the long version (google-fu):

-   Delete the relevant section from the .gitmodules file.
-   Stage the .gitmodules changes git add .gitmodules
-   Delete the relevant section from .git/config.
-   Run git rm --cached path\_to\_submodule (no trailing slash).
-   Run rm -rf .git/modules/path\_to\_submodule (no trailing slash).
-   Commit git commit -m "Removed submodule "
-   Delete the now untracked submodule files rm -rf path\_to\_submodule

Remove a theme

```shell
git submodule deinit -f themes/fuji #-f local changes
git rm -f themes/fuji
git commit -m "Removed submodule"
rm -rf .git/modules/themes/fuji
```
