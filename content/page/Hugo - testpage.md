---
tags:
- testing
categories: hugo
public: true
title: Hugo - testpage
date: 2022-03-17
lastMod: 2022-04-17
---
# Hugo testpage

  + This is a testpage, this is the kind of page you would store in Logseq, to be exported to Hugo

  + This is just a second paragraph.

  + ## This should be another headline

    + With some text

    + And some more

    + ### Headline 3

      + Lorem lipsum

      + Lipsum lorum

    + ### Headline 4

      + Lorem lipsum

      + Lipsum lorum

  + ## Markdown thingies

    + This is **bold text is bold**

    + _Cursif text_ is obviously not bold

    + No idea what to {{< logseq/mark >}}do with highlighted text{{< / logseq/mark >}}

    + ### Links

      + [Links and Cross References | Hugo](https://gohugo.io/content-management/cross-references/)

      + External links [Front Matter | Hugo](https://gohugo.io/content-management/front-matter/) should just carry over

      + But internal links to [[logseq] should be translated as `[logseq]({{< ref "logseq" >}})`

    + ### Code blocks

      + Code blocks are the most complicated part:

        + `[this is a simple code block]`

```clojure
[?b :block/name ?name]
```

## More testing

Let's look at an image:

  + But not on the main level

    + But in a sub-block

![test-image](/assets/steal-1.png)

{{< logseq/orgQUOTE >}}This is a quote{{< / logseq/orgQUOTE >}}

{{< logseq/orgNOTE >}}This is a note{{< / logseq/orgNOTE >}}

{{< logseq/orgTIP >}}This is a tip{{< / logseq/orgTIP >}}

{{< logseq/orgIMPORTANT >}}This is important{{< / logseq/orgIMPORTANT >}}

{{< logseq/orgCAUTION >}}Caution here{{< / logseq/orgCAUTION >}}

{{< logseq/orgPINNED >}}This is pinned{{< / logseq/orgPINNED >}}

{{< logseq/orgWARNING >}}This is a warning{{< / logseq/orgWARNING >}}

{{< logseq/orgEXAMPLE >}}This is an example{{< / logseq/orgEXAMPLE >}}
