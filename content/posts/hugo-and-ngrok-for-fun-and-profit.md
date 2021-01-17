+++
title = "hugo and ngrok, for fun and profit"
author = ["Alex Qwxlea"]
date = 2021-01-17T13:25:00+02:00
tags = ["hugo", "ngrok"]
draft = false
+++

[Hugo](https://gohugo.io/documentation/) is able to quickly update a site, and makes improving and bug-fixing very simple. Showing your work-in-progress online is not as simple, and probably not what you want, anyway. Comes in [ngrok](https://ngrok.com/).

> ngrok allows you to expose a web server running on your local machine to the internet. Just tell ngrok what port your web server is listening on.

Forwarding a local hugo session is as simple as:

```shell
ngrok http 1313
```

To automate it:

```shell
#!/usr/bin/env bash
# var for session name (to avoid repeated occurences)
SN="hugostuff"
PROJ="$(pwd)"

tmux new-session -s "$SN" -n "$PROJ" -d

tmux new-window -t "$SN:1" 'hugo -D -w server --disableFastRender'
tmux new-window -t "$SN:2" 'ngrok http 1313'

# Select window #1 and attach to the session
tmux select-window -t "$SN:2"
tmux -2 attach-session -t "$SN"
```
