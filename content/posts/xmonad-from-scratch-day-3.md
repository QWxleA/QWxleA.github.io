+++
title = "XMonad from scratch – day 3 – Xmobar"
author = ["Alex Qwxlea"]
tags = ["xmonad"]
draft = true
+++

New module:

-   [XMonad.Hooks.DynamicLog](https://hackage.haskell.org/package/xmonad-contrib-0.16/docs/XMonad-Hooks-DynamicLog.html)

Adding the needed plumbing:

```haskell
import XMonad
import XMonad.Hooks.DynamicLog
import XMonad.Hooks.ManageDocks
import XMonad.Util.Run(spawnPipe)
import XMonad.Util.EZConfig
import XMonad.Util.NamedActions
import System.IO

myTerminal = "alacritty"

myKeys conf = let
    subKeys str ks        = subtitle str : mkNamedKeymap conf ks
    in

    subKeys "My terminal bindings"
    [("M-h", addName "Htop"   $ spawn myTerminal)
    ] ^++^

    subKeys "My Emacs bindings"
    [("M-x a", addName "Emacsclient"   $ spawn "emacsclient -nc")
    ]

main = do
    xmproc <- spawnPipe "xmobar ~/.xmonad/xmobar.hs"
    xmonad
        $ addDescrKeys ((mod4Mask, xK_F1), xMessage) myKeys
        $ docks defaultConfig
        { layoutHook = avoidStruts  $  layoutHook defaultConfig
        , logHook = dynamicLogWithPP xmobarPP
                        { ppOutput = hPutStrLn xmproc
                        , ppTitle = xmobarColor "green" "" . shorten 50
                        }
        , modMask = mod4Mask
        }
```

And the bar itself:

```haskell
Config { font = "xft:Noto Sans:size=10:style=Bold"
       , bgColor = "black"
       , fgColor = "grey"
       , position = Top --W L 90
       , lowerOnStart = True
       , commands = [ Run Weather "EGPF" ["-t"," <tempF>F","-L","64","-H","77","--normal","green","--high","red","--low","lightblue"] 36000
                    , Run Cpu ["-L","3","-H","50","--normal","green","--high","red"] 10
                    , Run Memory ["-t","Mem: <usedratio>%"] 10
                    , Run Swap [] 10
                    , Run Date "%a %b %_d %l:%M" "date" 10
                    , Run StdinReader
                    ]
       , sepChar = "%"
       , alignSep = "}{"
       , template = "%StdinReader% }{  %cpu% | %memory% * %swap%    <fc=#ee9a00>%date%</fc> | %EGPF%"
       }
```
