+++
title = "Quickly accessing WhatsApp on Xmonad"
author = ["Alex Qwxlea"]
date = 2020-12-22T23:58:00+02:00
tags = ["xmonad"]
draft = false
+++

The whole point of using a tiling window manager is distractionless working. Unfortunetely the rest of the world does not always agree. Enter **WhatsApp**. WhatsApp is easy to use, and (in my part of the world) very popular. For a long time I used it from my phone, but that is not really convenient. Copying and pasting obviously is problematic, but the whole taking up your phone completely ruins any semblamce of workflow. `Web.whatsapp.com` is a good first step, but (for me) it was slow. Switch to browser, find the tab (one of 843...), send a smiley, back to work, euh, what was it I was doing?

But Xmonad has [scratchpads](https://hackage.haskell.org/package/xmonad-contrib-0.16/docs/XMonad-Util-NamedScratchpad.html), a straight-forward module that gives arbitary popup-applications. HOw to use this with WhatsApp? From the documentation:

Create `named scratchpads` configuration in your `xmonad.hs` like this:

```haskell
import XMonad.StackSet as W
import XMonad.ManageHook
import XMonad.Util.NamedScratchpad
```

Create a scratchpad, containing WhatsApp:

```haskell
scratchpads = [
NS "myWhatsApp" spawnWhatsApp findWhatsApp manageWhatsApp
] where
   spawnWhatsApp  = "chromium --app=https://web.whatsapp.com/"
   findWhatsApp   = appName =? "web.whatsapp.com"
   manageWhatsApp = customFloating $ W.RationalRect l t w h
              where
                h = 0.9
                w = 0.9
                t = 0.95 -h
                l = 0.95 -w
```

Add keybindings:

```haskell
, ((modm .|. controlMask .|. shiftMask, xK_w), namedScratchpadAction scratchpads "scWhatsapp")
```

And finally, a manage hook:

```haskell
, manageHook = namedScratchpadManageHook scratchpads
```


## Bonus: {#bonus}

This little script uses xprop to print window information (if available) in formats usable within your `xmonad.hs`.

**Source:** [Haskell wiki](https://wiki.haskell.org/Xmonad/Frequently%5Fasked%5Fquestions)

```shell
#! /bin/sh
exec xprop -notype \
  -f WM_NAME        8s ':\n  title =\? $0\n' \
  -f WM_CLASS       8s ':\n  appName =\? $0\n  className =\? $1\n' \
  -f WM_WINDOW_ROLE 8s ':\n  stringProperty "WM_WINDOW_ROLE" =\? $0\n' \
  WM_NAME WM_CLASS WM_WINDOW_ROLE \
  ${1+"$@"}
```
