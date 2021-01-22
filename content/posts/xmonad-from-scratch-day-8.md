+++
title = "XMonad from scratch – day 8 – Projects"
author = ["Alex Qwxlea"]
tags = ["xmonad"]
draft = true
+++

Time to get to work!

New modules:

-   [XMonad.Actions.DynamicProjects](https://hackage.haskell.org/package/xmonad-contrib-0.16/docs/XMonad-Actions-DynamicProjects.html) -- Imbues workspaces with additional features so they can be treated as individual project areas.
-   [XMonad.Prompt](https://hackage.haskell.org/package/xmonad-contrib-0.16/docs/XMonad-Prompt.html) -- A module for writing graphical prompts for XMonad
-   [XMonad.Actions.CycleWS](https://hackage.haskell.org/package/xmonad-contrib-0.16/docs/XMonad-Actions-CycleWS.html) -- Provides bindings to cycle forward or backward through the list of workspaces, to move windows between workspaces, and to cycle between screens. More general combinators provide ways to cycle through workspaces in various orders, to only cycle through some subset of workspaces, and to cycle by more than one workspace at a time.

<!--listend-->

```haskell
import XMonad
import XMonad.Hooks.DynamicLog
import XMonad.Hooks.ManageDocks
import XMonad.Util.Run(spawnPipe)
import XMonad.Util.EZConfig
import XMonad.Util.NamedActions
import System.IO
import XMonad.Layout.ShowWName
import XMonad.Layout.Fullscreen
import XMonad.Layout.Renamed
import XMonad.Util.SpawnOnce

import XMonad.Actions.DynamicProjects
import XMonad.Prompt
import XMonad.Actions.CycleWS

------------------------------------------------------------------------}}}
-- General                                                              {{{
---------------------------------------------------------------------------

myModMask                     = mod4Mask
myTerminal = "alacritty"
myBrowser  = "qutebrowser"

wsWEB = "web"
wsTXT = "txt"
wsTRM = "term"
wsSYS = "sys"
wsCHT = "chat"
wsFLT = "flot"
wsMOV = "movies"
wsTMP = "tmp"
wsPythonP = "Python"
wsXmonadP = "Xmonad"

myWorkspaces = [wsWEB, wsTXT, wsTRM, wsSYS, wsCHT, wsFLT, wsMOV, wsTMP]

---------------------------------------------------------------------------
-- Projects                                                              --
---------------------------------------------------------------------------

projects :: [Project]
projects =
    [ Project { projectName     = wsPythonP
        , projectDirectory  = "~/Projects/Python"
        , projectStartHook  = Just $ do spawnOnce (myTerminal ++ " --class pythonP")
                                        spawnOnce "pcmanfm ~/Video/Python"
        }
    , Project { projectName     = wsXmonadP
        , projectDirectory  = "~/Projects/Xmonad-from-scratch"
        , projectStartHook  = Just $ do spawnOnce "emacsclient -nc ~/Projects/Xmonad-from-scratch  -F '((name . \"xmonadP\"))'"
                                        spawnOnce (myTerminal ++ "--class xmonadP")
        }
    ]

------------------------------------------------------------------------}}}
-- Theme                                                                {{{
---------------------------------------------------------------------------

myFocusFollowsMouse  = False
myClickJustFocuses   = True

base03  = "#002b36"
base02  = "#073642"
base01  = "#586e75"
base00  = "#657b83"
base0   = "#839496"
base1   = "#93a1a1"
base2   = "#eee8d5"
base3   = "#fdf6e3"
yellow  = "#b58900"
orange  = "#cb4b16"
red     = "#dc322f"
magenta = "#d33682"
violet  = "#6c71c4"
blue    = "#268bd2"
cyan    = "#2aa198"
green   = "#859900"

-- sizes
gap         = 10
topbar      = 10
myBorder    = 2
myPrompt    = 26
status      = 20

myNormalBorderColor     = "#000000"
myFocusedBorderColor    = active

active      = blue
activeWarn  = red
inactive    = base02
focusColor  = blue
unfocusColor = base02

myFont      = "xft:NotoSansMono Nerd Font:style=Regular:size=12:antialias=true:hinting=true"
myBigFont   = "xft:NotoSansMono Nerd Font:style=Regular:size=12:antialias=true:hinting=true"
myLargeFont = "xft:NotoSansMono Nerd Font:style=Bold:size=60:antialias=true:hinting=true"

-- Theme for showWName which prints current workspace when you change workspaces.
myShowWNameTheme :: SWNConfig
myShowWNameTheme = def
    { swn_font              = myLargeFont
    , swn_fade              = 1.0
    , swn_bgcolor           = "#000000"
    , swn_color             = "#FFFFFF"
    }

myPromptTheme = def
    { font                  = myFont
    , bgColor               = base03
    , fgColor               = active
    , fgHLight              = base03
    , bgHLight              = active
    , borderColor           = base03
    , promptBorderWidth     = 0
    , height                = myPrompt
    , position              = Top
    }

warmPromptTheme = myPromptTheme
    { bgColor               = yellow
    , fgColor               = base03
    , position              = Top
    }

hotPromptTheme = myPromptTheme
    { bgColor               = red
    , fgColor               = base3
    , position              = Top
    }

------------------------------------------------------------------------}}}
-- Keys                                                                 {{{
---------------------------------------------------------------------------

myKeys conf = let
    subKeys str ks        = subtitle str : mkNamedKeymap conf ks
    in

    subKeys "My Applications"
    [ ("M-h", addName "Htop"   $ spawn myTerminal)
    , ("M-b", addName "Browser"   $ spawn myBrowser)
    ] ^++^

    subKeys "My Emacs bindings"
    [ ("M-x a", addName "Emacsclient"   $ spawn "emacsclient -nc")
    ] ^++^

    subKeys "Projects"
    [ ("M-w", addName "switch Project Prompt" $ switchProjectPrompt warmPromptTheme)
    , ("M-S-w", addName "shift To Project Prompt" $ shiftToProjectPrompt warmPromptTheme)
    , ("M-<Left>", addName "next workspace" $ prevWS)
    , ("M-<Right>", addName "previous workspace" $ nextWS)
    , ("M-z", addName "toggle last workspace" $ toggleWS)
    , ("M-S-<Left>", addName "XX next workspace" $ shiftToNext >> prevWS)
    , ("M-S-<Right>", addName "XX previous workspace" $ shiftToNext >> nextWS)
    ]

------------------------------------------------------------------------}}}
-- Hooks & main                                                         {{{
---------------------------------------------------------------------------

myLayouthook = avoidStruts $
               showWName' myShowWNameTheme $
               -- layoutHook defaultConfig
               tall ||| wide ||| full
tall   = renamed [Replace "tall"] $ Tall 1 0.03 0.5
wide   = renamed [Replace "wide"] $ Mirror tall
full   = renamed [Replace "full"] $ Full

-- myStartupHook :: X ()
myStartupHook = do
      spawnOnce "wallpaper"
      spawnOnce "picom &"
      spawnOnce "dunst &"
      spawnOnce "/usr/bin/emacs --daemon &"
      spawnOnce "unclutter --timeout 4 --jitter 10 --ignore-scrolling -b"

main = do
    xmproc <- spawnPipe "xmobar ~/.xmonad/xmobar.hs"
    xmonad
        $ addDescrKeys ((mod4Mask, xK_F1), xMessage) myKeys
        $ dynamicProjects projects
        $ docks def
            { borderWidth        = myBorder
            , clickJustFocuses   = myClickJustFocuses
            , focusFollowsMouse  = myFocusFollowsMouse
            , normalBorderColor  = myNormalBorderColor
            , focusedBorderColor = myFocusedBorderColor
            , layoutHook =  myLayouthook
            , startupHook        = myStartupHook
            , logHook  = dynamicLogWithPP xmobarPP
                { ppOutput          = hPutStrLn xmproc
                , ppCurrent         = xmobarColor active "" . wrap "[" "]"
                , ppTitle           = xmobarColor active "" . shorten 50
                , ppVisible         = xmobarColor base0  "" . wrap "(" ")"
                , ppUrgent          = xmobarColor red    "" . wrap " " " "
                , ppHiddenNoWindows = const ""
                , ppSep             = xmobarColor red myNormalBorderColor " : "
                , ppWsSep           = " "
                , ppLayout          = xmobarColor yellow ""
                , ppOrder           = id
                }
            , modMask    = mod4Mask
            , workspaces = myWorkspaces
            }
```
