---
date: 2021-09-06
lastmod: 2021-09-12
tags:
- logseq
- queries
category: pkm
icon: 📢
title: resonance lists howto
categories: pkm
lastMod: 2021-09-12
---
From a question on the Logseq forum: [Creating a Resonance Calendar from querie](https://discuss.logseq.com/t/advanced-queries-creating-a-resonance-calendar-from-queries/2351)

A resonance calendar is taken from a video created by Ali Abdaal [How I use Notion as a Resonance Calendar - YouTube](https://www.youtube.com/watch?v=lKYBB-Uw1IM). It's a list of interesting (resonating) resources, added to your notes. Resources can be one of:

  + Movies

  + Podcasts

  + Articles

How to implement this in logseq?

## Step 1 — gather a list of items


```clojure {linenos=table,hl_lines=["6-8"],linenostart=1}
#+BEGIN_QUERY
{:title [:h2 "Resonance list 1"]
:query [
:find (pull ?page [*])
:where
[?page :page/properties ?prop]
[(get ?props :type) ?typ]
[(contains? #{"movie" "article" "book"} ?type)]
]}
#+END_QUERY
```

  + This is a fairly straight forward query:


    + line **6**: take the page properties of `?page` (set in line **3**) and store them in `?props`

    + line **7**: of all the different properties, take `:type` and store it in `?type`

    + line **8**: check if `?type` is one of: movie, article or book

    + Done!

  + Important: book != `[boo](/page/boo)`. Don't use `[boo](/page/boo)` in type.

## Step 2 — remove some stuff we don\'t want to see


```clojure {linenos=table,hl_lines=["9-12"],linenostart=1}
#+BEGIN_QUERY
{:title [:h2 "Resonance list 2"]
:query [
:find (pull ?page [*])
:where
[?page :page/properties ?prop]
[(get ?props :type) ?typ]
[(contains? #{"movie" "article" "book"} ?type)]
(not
[(get ?props :rating) ?rating]
[(= "[1/10](/page/1/10)" ?rating)]
)
]}
#+END_QUERY
```

    + New are the line **9 to 12**

    + line **9**: a **not** statement, everything that matches this query will be *excluded* from the result

    + line **10**: again, a page property

    + line **11**: but this time we search for `:rating` and we match it with `1/10`

    + line **12**: close the `not` statement

    + **Result:** same list, but without the ones rated `1/10`

## Step 2b — Only the bad stuff


  + For fun you can invert the search, *only* show the ones rated `1/10`:

```clojure  {linenos=table,hl_lines=[10],linenostart=1}
#+BEGIN_QUERY
{:title [:h2 "Resonance list 2b — all bad!"]
:query [
:find (pull ?page [*])
:where
[?page :page/properties ?prop]
[(get ?props :type) ?typ]
[(contains? #{"movie" "article" "book"} ?type)]
[(get ?props :rating) ?rating]
[(= "[1/10](/page/1/10)" ?rating)]
]}
#+END_QUERY
```

  + This query is simpler then the previous one, `and` is implied, by default all lines should be *true*. Logseq is a very positive program 😄.

## Step 3 — remove more bad ratings


  + It's not just `1/10` that's bad, so is `2/10`, but adding that is not as simple as you would want:

```clojure {linenos=table,hl_lines=[12],linenostart=1}
#+BEGIN_QUERY
{:title [:h2 "Resonance list 3"]
:query [
:find (pull ?page [*])
:where
[?page :page/properties ?prop]
[(get ?props :type) ?typ]
[(contains? #{"movie" "article" "book"} ?type)]
(not
[?page :page/properties ?prop]
[(get ?props :rating) ?rating]
[(contains? #{ #{"1/10"} #{"2/10"} } ?rating)]
)
]}
#+END_QUERY
```

  + Notice line **12** the `contains?` statement is quite complicated. This is because `1/10` and `2/10` are really `[1/10](/page/1/10) and `[2/10](/page/2/10). They're not just text, they are searchable items. This is different from `type` in *Resonance List 1*, line **8**.

## Step 4 — remove by tag


  + But what if you would like to have a tag that shows how terrible the book or movie was?

  + Simple, add `tags:: [terrible](/page/terrible)` (or just `terrible`, if you never want to list them, just change it accordingly in the listing below)

```clojure {linenos=table,hl_lines=["13-14"],linenostart=1}
#+BEGIN_QUERY
{:title [:h2 "Resonance list 4 - final version"]
:query [
:find (pull ?page [*])
:where
[?page :page/properties ?prop]

[(get ?props :type) ?typ]
[(contains? #{"movie" "article" "book"} ?type)]

[?page :page/name ?nam]

(not [(missing? $ ?page :page/name)])
(not [?page :block/tags [:block/name "terrible"]])

(not
[?page :page/properties ?prop]
[(get ?props :rating) ?rating]
[(contains? #{ #{"1/10"} #{"2/10"} } ?rating)]
)
]}
#+END_QUERY
```

  + New are the lines **13** and **14**, we exclude `[terrible](/page/terrible)` from our list.

  + If you want to add more tags, then look at *Resonance List 3* how to do that.

## Conclusion

  + Logseq's search functionality is not as easy as one would wish for, but it is adequate, and can be made to search for the data you're interested in.
