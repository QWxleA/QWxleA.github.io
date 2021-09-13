---
title: logseq 24 hr pages tutorial
date: 2021-09-12
lastmod: 2021-09-12
tags:
- logseq
categories:
- tutorial
---

A small query that **lists all the changes, made during the last 24 hours**.

With some pointers from @lauren#0001 and @Miro#1174 and a bit of help from google, I found: [logseq/query_react.cljs ](https://github.com/logseq/logseq/blob/fef5bbf0688f8fe28ec21255fb135951395e0ec7/src/main/frontend/db/query_react.cljs), which pointed to three additional helpers:


  + **:right-now-ms** which is this moment in milliseconds from 1970
  + **:start-of-today-ms** which points to this morning 0:00
  + **:end-of-today-ms** which points to tonight 24:00

They can be used like this:
```clojure
#+BEGIN_QUERY
{:title [:h2 "My 24h changes"]
:query [:find (pull ?b [*])
:in $ ?end
:where
[?b :block/updated-at ?v]
[(- ?end 86400000 ) ?period]
[(>= ?v ?period)]
[(< ?v ?end)]
]
; :inputs [:start-of-today-ms]
; :inputs [:right-now-ms]
:inputs [:end-of-today-ms]
}
#+END_QUERY
```

You have to choose one of the three inputs, 86400000 is 24 hours in milliseconds (60 x 60 x 24 x 1000), a week would be 604800000 milliseconds.


  + **:right-now-ms** will give you a 24 hours period from this moment, not very useful, imho
  + **:start-of-today-ms** which you can use for yesterday's changes
  + **:end-of-today-ms**, which would be more useful for today's changes
