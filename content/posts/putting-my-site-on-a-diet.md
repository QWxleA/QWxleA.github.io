+++
title = "Putting my site on a diet"
author = ["Alex Qwxlea"]
date = 2021-01-18T18:05:00+02:00
lastmod = 2021-01-18T21:35:05+02:00
draft = false
+++

Surfing, I ran into [512kb.club](https://512kb.club/), on which the writer lamented:

> The internet has become a bloated mess. Massive javascript libraries, countless client-side queries and overly complex frontend frameworks are par for the course these days.

And I agree, the web is becoming unusable, or at least annoying, and we should all do our part. As the name implies, to become part of the club, the "... total UNCOMPRESSED web resources must not exceed 512KB." Mine did, so, time to put my slim down my site.

Initial size, 349.9Kb, uncompressed, 558.1Kb:

{{< figure src="/images/diet-size.png" caption="Figure 1: 558.1 Kb -- not good enough" >}}

The biggest assets my site uses are the **Font Awesome** icons, so that's the obvious place to start. But how to get rid of those files (without loosing my icons)? Looking over my site I noticed that I don't really use all that many icons, just for ****mastodon****, ****github**** and ****email****. Why not replace those icons with (inline) svg icons instead? That thought lead me to [this excellent page](http://oostens.me/posts/hugo-resources-inline-svg-icons/).

The short of it is:

1.  Create `<workdir>/assets/svg`, and dump the svgs in here.
2.  Add partial in `<workdir>/layouts/partials/inline-svg.html`.
3.  Add the shortcode in `<workdir>/layouts/shortcodes/inline-svg.html`.
4.  Add scss in `<workdir>/assets/sass/2-components/_svg.scss`

<!--listend-->

```html
{{ $svg := resources.Get (print "svg/" . ".svg") }}
<i class="inline-svg" >{{ $svg.Content | safeHTML }}</i>
```

<div class="src-block-caption">
  <span class="src-block-number">Code Snippet 1</span>:
  partial inline-svg.html
</div>

```html
{{- partial "inline-svg" (.Get 0) -}}
```

<div class="src-block-caption">
  <span class="src-block-number">Code Snippet 2</span>:
  shortcode inline-svg.html
</div>

```css
.inline-svg {
  display: inline-block;
  vertical-align: middle;

  svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
    display: inline-block;
  }
}
```

<div class="src-block-caption">
  <span class="src-block-number">Code Snippet 3</span>:
  _svg.scss
</div>

All this should result in the following shortcode:

```html
{{</* inline-svg "mastodon" */>}}
```

And if everything is correct, this prints a mastodon icon: {{< inline-svg "mastodon" >}}, yes!

1.  Next, replace all the 'Font awesome' icons.

    Find svg-icons from [iconify.design](https://iconify.design/icon-sets/). Fix your template ... profit!

{{< figure src="/images/diet-size-2.png" caption="Figure 2: Much better! 348.3 Kb" >}}

Further steps, replace the logo with an svg, and use the same svg for the favicon. Minimize the svgs with [svgomg](https://jakearchibald.github.io/svgomg/). REmove the last webfont, and improve the font-stack.

{{< figure src="/images/diet-size-3.png" caption="Figure 3: Yes! 167 Kb That's more like it." >}}


## Resources {#resources}

-   [Hugo + resources = inline svg icons](http://oostens.me/posts/hugo-resources-inline-svg-icons/)
-   [Icon Sets • Iconify](<https://iconify.design/icon-sets/>)
-   [Are you using SVG favicons yet? A guide for modern browsers.](https://medium.com/swlh/are-you-using-svg-favicons-yet-a-guide-for-modern-browsers-836a6aace3df) (maybe for later)
