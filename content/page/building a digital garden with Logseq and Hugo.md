---
date:
- 2022-04-17
icon: 📝
category: development
tags:
- hugo
- logseq
title: building a digital garden with Logseq and Hugo
categories: development
lastMod: 2022-04-17
---
We, as people, are social animals. We live together, we work together, we relax together, but what about *learning* together? In these days of global pandemics and, be honest, living inside our digital tools we have slowly gone back to being not-very-social. [Digital gardens]({{< ref "digital garden" >}}) are one way to overcome this *modern ill*: Learning and building/creating in such a way that it is easy for others to see and/or comment on what you do and learn.

At the same time, being too busy with the *technical part* will detract from doing any {{< logseq/mark >}}learning{{< / logseq/mark >}}, so it should be simple to go *from* your [system]({{< ref "pkm" >}}) where you keep your notes/keep track of what you learn, *to* a website. With the help of a plugin it is easy to export all your public pages. Combine this with a [hugo]({{< ref "hugo" >}}) theme that *knows* about back-links and other [logseq]({{< ref "logseq" >}}) specific tricks, you can now start building your own [garden]({{< ref "digital garden" >}}).

## Preparing your pages

  + Logseq has a special setting for pages that are ready for export, in the header of your page should be set: `public:: true` (notice the double colon!). It can also be set from the dropdown menu.

  + Next, just export all the pages for [hugo]({{< ref "hugo" >}}) with the plugin.


  + {{< logseq/orgIMPORTANT >}}[hugo]({{< ref "hugo" >}}) gets upset if pages are referenced that do not actually exist, so be careful that all the links referenced in a page are also exported.{{< / logseq/orgIMPORTANT >}}

## Preparing Hugo

  + Hugo is a general purpose blogging software, not specifically for[digital gardens]( [digital garden]({{< ref "digital garden" >}})) or even [logseq]({{< ref "logseq" >}}). So for it to be usefula as a garden we need to add some functionality. For starters, backlinks:

```html
{{ $re := $.File.BaseFileName }}
{{ $backlinks := slice }}
{{ range where .Site.RegularPages "Type" "page" }}
   {{ if and (findRE $re .RawContent) (not (eq $re .File.BaseFileName)) }}
      {{ $backlinks = $backlinks | append . }}
   {{ end }}
{{ end }}

{{ if gt (len $backlinks) 0 }}
  <aside>
    <h3>Backlinks</h3>
    <div class="backlinks">
      <ul>
       {{ range $backlinks }}
          <li class="capitalize"><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
       {{ end }}
     </ul>
    </div>
  </aside>
{{ else  }}
  <aside>
    <h4>No notes link to this note</h4>
  </aside>
{{ end }}

<aside class="related">
  {{ $related := .Site.RegularPages.Related . | complement $backlinks | first 3 -}}
  {{ with $related -}}
  <h3>slightly related</h3>
  <ul>
  {{ range . -}}
  <li class="capitalize"><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
  {{ end -}}
  </ul>
  {{ end -}}
</aside>
```

  + This snippet will go over all pages, and find out if any of them link to this one.

That's as far as I've gotten so far. Not sure what else is needed. More to come...
