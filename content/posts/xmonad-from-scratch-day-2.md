+++
title = "XMonad from scratch – day 2 – Keybindings"
author = ["Alex Qwxlea"]
tags = ["xmonad"]
draft = true
+++

## My own keys - 1 {#my-own-keys-1}

Add simple(r) keybindings. It will add to the existing ones, overriding them if nececeray.

Module: [XMonad-Util-EZConfig](http://hackage.haskell.org/package/xmonad-contrib-0.14/docs/XMonad-Util-EZConfig.html)

It's a good habit to read at least the intro of your new modules.

```haskell
import XMonad
import XMonad.Util.EZConfig(additionalKeys)
import XMonad.Util.Run(spawnPipe)
import System.IO

main = do
    xmonad $ defaultConfig
        { modMask = mod4Mask     -- Rebind Mod to the Windows key
        , terminal = "alacritty"
        } `additionalKeys`
        [ ((mod4Mask .|. shiftMask, xK_z), spawn "xscreensaver-command -lock")
        , ((controlMask, xK_Print), spawn "sleep 0.2; scrot -s")
        , ((0, xK_Print), spawn "scrot")
        , ((mod4Mask, xK_e), spawn "emacsclient -nc")
        , ((mod4Mask, xK_b), spawn "qutebrowser")
        ]
```


## My own keys - 2 Emacs {#my-own-keys-2-emacs}

Add Emacs-style keybindings (`additionalKeysP`). For a list of keys, see [here](http://hackage.haskell.org/package/xmonad-contrib-0.14/docs/XMonad-Util-EZConfig.html#v:mkKeymap).

Module: [XMonad-Util-EZConfig](http://hackage.haskell.org/package/xmonad-contrib-0.14/docs/XMonad-Util-EZConfig.html)

Notice `XMonad.Util.EZConfig(additionalKeysP)`!

```haskell
import XMonad
import XMonad.Util.EZConfig(additionalKeysP)
import XMonad.Util.Run(spawnPipe)
import System.IO

main = do
xmonad $ defaultConfig
  { modMask = mod4Mask     -- Rebind Mod to the Windows key
  , terminal = "alacritty"
  } `additionalKeysP`
  [ -- So much easier!
    ("M-e", spawn "emacsclient -nc")
  , ("M-b", spawn "qutebrowser")
  ]
```


## My own keys - 3 descriptions {#my-own-keys-3-descriptions}

Next we'll be adding [XMonad.Util.NamedActions](https://hackage.haskell.org/package/xmonad-contrib-0.16/docs/XMonad-Util-NamedActions.html).

A wrapper for keybinding configuration that can list the available keybindings.

Notice the difference beween the old help (which we haven't disabled yet) `M-?` and the new `M-<f1>`!

```haskell
import XMonad
import XMonad.Util.Run(spawnPipe)
import XMonad.Util.EZConfig
import XMonad.Util.NamedActions
import System.IO

main = do
   xmonad $ addDescrKeys ((mod4Mask, xK_F1), xMessage) myKeys
                   defaultConfig { modMask = mod4Mask , terminal = "alacritty"}

myKeys c = (subtitle "Custom Keys":) $ mkNamedKeymap c $
   [ ("M-e", addName "Emacsclient" $ spawn "emacsclient -nc")
   , ("M-b", addName "Qutebrowser" $ spawn "qutebrowser")
   , ("M-c", sendMessage' Expand)]
    ^++^
   [("<XF86AudioPlay>", spawn "mpc toggle" :: X ()),
    ("<XF86AudioNext>", spawn "mpc next")]
```

See also new-style and old-style (needs `:: X ()`!) used, divided by `^++^`.


### Multiple key blocks {#multiple-key-blocks}

With a nice little macro? to make it look better.

```haskell
import XMonad
import XMonad.Util.Run(spawnPipe)
import XMonad.Util.EZConfig
import XMonad.Util.NamedActions
-- import System.IO

myTerminal = "alacritty"

main = do
   xmonad $ addDescrKeys ((mod4Mask, xK_F1), xMessage) myKeys
                   defaultConfig { modMask = mod4Mask , terminal = myTerminal}

myKeys conf = let
    subKeys str ks        = subtitle str : mkNamedKeymap conf ks
    in

    subKeys "My terminal bindings"
    [("M-h", addName "Htop"   $ spawn myTerminal)
    ] ^++^

    subKeys "My Emacs bindings"
    [("M-x a", addName "Emacsclient"   $ spawn "emacsclient -nc")
    ]
```


### More {#more}

Links:

-   [Xmonad/General xmonad.hs config tips](https://wiki.haskell.org/Xmonad/General%5Fxmonad.hs%5Fconfig%5Ftips#Terminal%5Femulator%5Ffactories)
-   [XMonad Doc Extending](https://hackage.haskell.org/package/xmonad-contrib-0.16/docs/XMonad-Doc-Extending.html)
-   [wiki](https://wiki.haskell.org/Xmonad) (has inkscape keyboard)

-   [XConfig](https://hackage.haskell.org/package/xmonad-0.15/docs/XMonad-Core.html#v:XConfig) what `can` be changed in main
