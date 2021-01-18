+++
title = "About"
author = ["Alex Qwxlea"]
date = 2020-12-21T13:06:00+02:00
draft = false
type = "page"
+++

This is an awesome static page where I write about myself and my website.


## Me {#me}

My name is Alex, and if it's alright with you, I'll skip the last name. Anonimity is hard to do online, but we can always try.

I am a nerd. I like technology, computers, languages, fiddling with hard- and software. Not that I'm all that good at it, but it ****does**** give me great joy.


## Tools {#tools}

-   [Emacs](https://www.gnu.org/software/emacs/)
    -   [OX-Hugo](https://ox-hugo.scripter.co/) -- ox-hugo is an [Org](https://orgmode.org/) exporter backend that exports Org to Hugo-compatible Markdown (Blackfriday) and also generates the front-matter (in TOML or YAML format).
-   [Hugo](https://gohugo.io/)
    -   [Cactus theme](https://github.com/monkeyWzr/hugo-theme-cactus)
-   [favicongenerator](https://realfavicongenerator.net/)


## Logo {#logo}

Source: [wikimedia.org](https://commons.wikimedia.org/wiki/File:Alphabet-q-at-coloringpagesforkidsboys-dotcom.svg)

<a id="org221d5bd"></a>

{{< figure src="/images/Alphabet-q-at-coloringpagesforkidsboys-dotcom.svg.png" caption="Figure 1: Coloringbuddymike, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons" >}}

Favicon created with **imagemagick**:

```shell
magick convert -resize 32x32 -background transparent static/images/logo-color.svg  static/images/favicon.ico
```
