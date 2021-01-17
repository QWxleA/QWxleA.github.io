+++
title = "hugo and ngrok, for fun and profit"
author = ["Alex Qwxlea"]
date = 2021-01-17T13:25:00+02:00
tags = ["hugo", "ngrok"]
draft = false
+++

[Hugo](https://gohugo.io/documentation/) is able to quickly update a site, and makes improving and bug-fixing very simple. Showing your work-in-progress online is not as simple, and probably not what you want, anyway. Comes in [ngrok](https://ngrok.com/).

> ngrok allows you to expose a web server running on your local machine to the internet. Just tell ngrok what port your web server is listening on.

Installatuin is simple, just download from [here](https://ngrok.com/download), and put in your path.

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

And ... that did not work well at all. On my machine it worked perfectly, but outside, where localhost did not work, my test-project missed all js-, css- and img-files. The solution is not hard:

```html
<a class="navbar-brand" href="{{ "/" | relLangURL }}"><img class="logo" src="{{ "img/logo.jpeg" | absURL }}" alt="{{ .Site.Title }}"></a>
```

If you use `absURL`, you end up with ****localhost**** in the complete url, but if you use `relURL`, you get a relative link:

```html
{{ "mystyle.css" | absURL }} → "https://example.com/hugo/mystyle.css"
{{ "mystyle.css" | relURL }} → "/hugo/mystyle.css"
```

<div class="src-block-caption">
  <span class="src-block-number">Code Snippet 1</span>:
  <a href="https://gohugo.io/functions/absurl/">Hugo documentation</a>
</div>

Source: [Hugo documentation](https://gohugo.io/functions/absurl/)

So, the problem was solved doing a find-replace: `s/absURL/relURL/g`

```html
<a class="navbar-brand" href="{{ "/" | relLangURL }}"><img class="logo" src="{{ "img/logo.jpeg" | relURL }}" alt="{{ .Site.Title }}"></a>
```
