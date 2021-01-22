+++
title = "XMonad from scratch – day 1 – Starting small"
author = ["Alex Qwxlea"]
date = 2021-01-19T18:32:00+02:00
tags = ["xmonad"]
draft = false
+++

## Intro -- taste and time {#intro-taste-and-time}

There are plenty of [Window Managers](https://en.wikipedia.org/wiki/Comparison%5Fof%5FX%5Fwindow%5Fmanagers) for Linux and \*BSD, some of the more famous ones are [I3](https://i3wm.org/), [Awesome WM](https://awesomewm.org), [OpenBox](https://openbox.org/wiki/Openbox), but there are many more.

It is impossible to say which one is the best, the word **best** is a terrible qualifier, what does it mean **best**? The smallest, fastest, the one with the most things you can edit?

Despite all that, XMonad is ****one**** of the ****best**** window managers. Why? Because it is really, really good at managing windows. With a little bit of elbow grease you can make it do whatever you want. And it can even look really good doing it:

<a id="org1497b66"></a>

{{< figure src="/images/xmonad-day1-1.png" caption="Figure 1: This is what your desktop could look like ... if you have taste, and lots of time" >}}

In this series we will help you configure XMonad to do what you want, or at least, give you the tools to do so. BTW, although this desktop looks really good, it is by no means the most advanced configuration around.

****Links:****

-   [Axarva/dotfiles-2.0](https://github.com/Axarva/dotfiles-2.0) - Bling! A really good looking XMonad install


## Dev-environment {#dev-environment}

Experimenting is fun, but loosing all your work not so much, so we will set up a simple dev-environment that we can use to play around.

****Needed:****

```shell
sudo pacman install xorg-server-xephyr xterm
```

For your convenience, here is a little shell-script that can help you run XMonad in xephyr, which is, in a window o your desktop. Doing it like this will make it easy to experiment, while keeping your daily driver intact. Then, when you're happy with it, you can move the XMonad configuration to either `$HOME/.xmonad` or, what I do, `$HOME/.config/xmonad`. XMonad will read either one.

The script will (in the directory you run it from, for example `$HOME/Desktop`, or wherever you do your experiments), create a folder called `state`. In state it will create 3 directories `config`, `cache`, and `data`.

```shell
$ tree state
state
├── cache
├── config
└── data

3 directories, 0 files
```

Script:

```shell
#!/bin/sh -eu

################################################################################
usage () {
  cat <<EOF
Usage: run-in-xephyr.sh [options]

  -d NxN  Set the screen size to NxN
  -h      This message
  -n NUM  Set the internal DISPLAY to NUM
  -s NUM  Set the number of screens to NUM
EOF
}

################################################################################
SCREENS=1
SCREEN_SIZE="1024x768"
DISPLAY_NUMBER=5

################################################################################
while getopts "d:hn:s:" o; do
  case "${o}" in
    d) SCREEN_SIZE=$OPTARG
       ;;

    h) usage
       exit
       ;;

    n) DISPLAY_NUMBER=$OPTARG
       ;;

    s) SCREENS=$OPTARG
       ;;

    *) echo; usage
       exit 1
       ;;
  esac
done

shift $((OPTIND-1))

################################################################################
XMONAD_CONFIG_DIR=$(pwd)/state/config
XMONAD_CACHE_DIR=$(pwd)/state/cache
XMONAD_DATA_DIR=$(pwd)/state/data
export XMONAD_CONFIG_DIR XMONAD_CACHE_DIR XMONAD_DATA_DIR

mkdir -p "$XMONAD_CONFIG_DIR" "$XMONAD_CACHE_DIR" "$XMONAD_DATA_DIR"
echo "xmonad will store state files in $(pwd)/state"

################################################################################
SCREEN_COUNTER=0
SCREEN_OPTS=""
X_OFFSET_CURRENT="0"
X_OFFSET_ADD=$(echo "$SCREEN_SIZE" | cut -dx -f1)

while expr "$SCREEN_COUNTER" "<" "$SCREENS"; do
  SCREEN_OPTS="$SCREEN_OPTS -origin ${X_OFFSET_CURRENT},0 -screen ${SCREEN_SIZE}+${X_OFFSET_CURRENT}"
  SCREEN_COUNTER=$(("$SCREEN_COUNTER" + 1))
  X_OFFSET_CURRENT=$(("$X_OFFSET_CURRENT" + "$X_OFFSET_ADD"))
done

(
  # shellcheck disable=SC2086
  Xephyr $SCREEN_OPTS +xinerama +extension RANDR \
         -ac -br -reset -terminate -verbosity 10 \
         -softCursor ":$DISPLAY_NUMBER" &

  export DISPLAY=":$DISPLAY_NUMBER"
  echo "Waiting for windows to appear..." && sleep 2

  xterm -fg green -bg black -fn "monospace:pixelsize=14" -hold xrandr &
  xterm -fg green -bg black -fn "monospace:pixelsize=14" &
  exec /usr/bin/xmonad
)
```

<div class="src-block-caption">
  <span class="src-block-number">Code Snippet 1</span>:
  run-in-xephyr v.0.1
</div>

You obviously don't **have** to use the script, you can run XMonad in a VM, or even as your desktop, if you please.

****For reference:****

-   [Arch wiki - Xephyr](https://wiki.archlinux.org/index.php/Xephyr)


## Mimimal - lets start small {#mimimal-lets-start-small}

XMonad is written in [haskell](https://www.haskell.org/), which is a really weird language. But, as XMonad proves, it is very powerfull, and you don't have too understand all (any?) haskell to be able to use XMonad for yourself. We will start small, and slowly add more functionality to our setup, explaining what we did.

****Installation:****

A minimal install needs the following, as you might have noticed, I am using Arch, but you can do the same on Ubuntu, Debian or whatever else you want to run, just use your flavor of package-manager. Arch is just a good base-line, as the packages it installs are as close to upstream as it gets:

```shell
sudo pacman -S xmonad xmonad-contrib xmobar dmenu xterm
```

****XMonad**** is XMonad itself, ****xmonad-contrib**** is a library of extra functionality (this is what makes XMonad so outstanding), ****dmenu**** is minimal a program launcher, and ****xterm**** is the default terminal. It looks a bit spartan, but it is enough to get a lot done, actually.

To start up XMonad, to quote [the Arch Wiki](https://wiki.archlinux.org/index.php/Xmonad#Starting):

> Run xmonad with xinit (1).
>
> Alternatively, select Xmonad from the session menu in a display manager of choice (2).

1.  Which, translated for mortals means you add / create a file called `$HOME/.xinitrc`, and run `startx`:

<!--listend-->

```sh
exec xmonad
```

<div class="src-block-caption">
  <span class="src-block-number">Code Snippet 2</span>:
  bare xinitrc
</div>

****Note:**** On arch you need to install ****xorg-xinit****, which contains `/usr/bin/startx`

1.  If you use a [display manager](https://wiki.archlinux.org/index.php/Display%5Fmanager), like GDM or SSDM, you can just choose **xmonad** when you login.

****For reference:****

-   [xmonad - ArchWiki](https://wiki.archlinux.org/index.php/Xmonad)
-   [xmobar - ArchWiki](https://wiki.archlinux.org/index.php/Xmobar)
-   [dmenu - ArchWiki](https://wiki.archlinux.org/index.php/Dmenu)
-   [xterm - ArchWiki](https://wiki.archlinux.org/index.php/Xterm#Installation)

Right, now we have the base of our setup. In our case, we will use `run-in-xephyr.sh`, which will put our environment in order, and run XMonad in a window on our desktop. But first, let's configure XMonad.

Our first configuration is about as bare as it gets, the only changes from the default are:

-   favourite terminal
-   favourite keybinding

<!--listend-->

{{< highlight haskell "linenos=table, linenostart=1" >}}
import XMonad

main = xmonad def
        { modMask = mod4Mask -- Use Super instead of Alt
        , terminal = "alacritty"
        -- more changes
}
{{< /highlight >}}


<div class="src-block-caption">
  <span class="src-block-number">Code Snippet 3</span>:
  A minimal XMonad configuration
</div>

****Explanation:****

-   line 1: XMonad does not come with all bells and whistles, you have to import libararies for functionality, starting with XMonad itself
-   line 3: ****main:**** this is a real haskell program, and haskell starts with **main**, next we call xmonad with the default config **def** (see [here](#code-snippet--xmonad1-default))
    The changes we make in lines 4 and 5 override the defaults.
-   line 4: ****modMask**** is a variable xmonad has defined, we give it the value **mod4Mask** (Super).
-   line 5: ****terminal****, default is xterm, we prefer **alacritty**.

And that's it, your first haskell program!

****Sidenote:**** This really **is** a haskell program, if you want to, you can start up `ghci`, the haskell interpreter, and load your `xmonad.hs`. When your config gets more eleborate you can even interact with it in the interpreter!

****Alternative****

If you are using Super (or the Windows key, but we'll call it Super from now on) in your current WM (like I do), then use:

```haskell
import XMonad

main = xmonad def
        { modMask = mod4Mask -- Use Super instead of Alt
        , terminal = "alacritty"
        -- more changes
}
```

<div class="src-block-caption">
  <span class="src-block-number">Code Snippet 4</span>:
  Even less of a XMonad configuration
</div>

Note that xmonad>=0.11 has by default a list of the default keybindings bound to `M-S-/` or `M-?` (Depending on your settings, either `Alt+Shift+/`, or `Super+Shift+/`.

****For reference:****

-   [Alacritty - ArchWiki](https://wiki.archlinux.org/index.php/Alacritty)
-   [John Coerzen](https://wiki.haskell.org/Xmonad/Config%5Farchive/John%5FGoerzen%27s%5FConfiguration)


## PS -- the default configuration {#ps-the-default-configuration}

-   [Template\_xmonad.hs\_(darcs)](https://wiki.haskell.org/Xmonad/Config%5Farchive/Template%5Fxmonad.hs%5F(darcs))
-   [yiannist's xmonad.hs](https://wiki.haskell.org/Xmonad/Config%5Farchive/yiannist%27s%5Fxmonad.hs)

<!--listend-->

<a id="code-snippet--xmonad1-default"></a>
```haskell
--
-- xmonad example config file.
--
-- A template showing all available configuration hooks,
-- and how to override the defaults in your own xmonad.hs conf file.
--
-- Normally, you'd only override those defaults you care about.
--

import XMonad
import Data.Monoid
import System.Exit

import qualified XMonad.StackSet as W
import qualified Data.Map        as M

-- The preferred terminal program, which is used in a binding below and by
-- certain contrib modules.
--
myTerminal      = "xterm"

-- Whether focus follows the mouse pointer.
myFocusFollowsMouse :: Bool
myFocusFollowsMouse = True

-- Whether clicking on a window to focus also passes the click to the window
myClickJustFocuses :: Bool
myClickJustFocuses = False

-- Width of the window border in pixels.
--
myBorderWidth   = 1

-- modMask lets you specify which modkey you want to use. The default
-- is mod1Mask ("left alt").  You may also consider using mod3Mask
-- ("right alt"), which does not conflict with emacs keybindings. The
-- "windows key" is usually mod4Mask.
--
myModMask       = mod1Mask

-- The default number of workspaces (virtual screens) and their names.
-- By default we use numeric strings, but any string may be used as a
-- workspace name. The number of workspaces is determined by the length
-- of this list.
--
-- A tagging example:
--
-- > workspaces = ["web", "irc", "code" ] ++ map show [4..9]
--
myWorkspaces    = ["1","2","3","4","5","6","7","8","9"]

-- Border colors for unfocused and focused windows, respectively.
--
myNormalBorderColor  = "#dddddd"
myFocusedBorderColor = "#ff0000"

------------------------------------------------------------------------
-- Key bindings. Add, modify or remove key bindings here.
--
myKeys conf@(XConfig {XMonad.modMask = modm}) = M.fromList $

    -- launch a terminal
    [ ((modm .|. shiftMask, xK_Return), spawn $ XMonad.terminal conf)

    -- launch dmenu
    , ((modm,               xK_p     ), spawn "dmenu_run")

    -- launch gmrun
    , ((modm .|. shiftMask, xK_p     ), spawn "gmrun")

    -- close focused window
    , ((modm .|. shiftMask, xK_c     ), kill)

     -- Rotate through the available layout algorithms
    , ((modm,               xK_space ), sendMessage NextLayout)

    --  Reset the layouts on the current workspace to default
    , ((modm .|. shiftMask, xK_space ), setLayout $ XMonad.layoutHook conf)

    -- Resize viewed windows to the correct size
    , ((modm,               xK_n     ), refresh)

    -- Move focus to the next window
    , ((modm,               xK_Tab   ), windows W.focusDown)

    -- Move focus to the next window
    , ((modm,               xK_j     ), windows W.focusDown)

    -- Move focus to the previous window
    , ((modm,               xK_k     ), windows W.focusUp  )

    -- Move focus to the master window
    , ((modm,               xK_m     ), windows W.focusMaster  )

    -- Swap the focused window and the master window
    , ((modm,               xK_Return), windows W.swapMaster)

    -- Swap the focused window with the next window
    , ((modm .|. shiftMask, xK_j     ), windows W.swapDown  )

    -- Swap the focused window with the previous window
    , ((modm .|. shiftMask, xK_k     ), windows W.swapUp    )

    -- Shrink the master area
    , ((modm,               xK_h     ), sendMessage Shrink)

    -- Expand the master area
    , ((modm,               xK_l     ), sendMessage Expand)

    -- Push window back into tiling
    , ((modm,               xK_t     ), withFocused $ windows . W.sink)

    -- Increment the number of windows in the master area
    , ((modm              , xK_comma ), sendMessage (IncMasterN 1))

    -- Deincrement the number of windows in the master area
    , ((modm              , xK_period), sendMessage (IncMasterN (-1)))

    -- Toggle the status bar gap
    -- Use this binding with avoidStruts from Hooks.ManageDocks.
    -- See also the statusBar function from Hooks.DynamicLog.
    --
    -- , ((modm              , xK_b     ), sendMessage ToggleStruts)

    -- Quit xmonad
    , ((modm .|. shiftMask, xK_q     ), io (exitWith ExitSuccess))

    -- Restart xmonad
    , ((modm              , xK_q     ), spawn "xmonad --recompile; xmonad --restart")

    -- Run xmessage with a summary of the default keybindings (useful for beginners)
    , ((modm .|. shiftMask, xK_slash ), spawn ("echo \"" ++ help ++ "\" | xmessage -file -"))
    ]
    ++

    --
    -- mod-[1..9], Switch to workspace N
    -- mod-shift-[1..9], Move client to workspace N
    --
    [((m .|. modm, k), windows $ f i)
        | (i, k) <- zip (XMonad.workspaces conf) [xK_1 .. xK_9]
        , (f, m) <- [(W.greedyView, 0), (W.shift, shiftMask)]]
    ++

    --
    -- mod-{w,e,r}, Switch to physical/Xinerama screens 1, 2, or 3
    -- mod-shift-{w,e,r}, Move client to screen 1, 2, or 3
    --
    [((m .|. modm, key), screenWorkspace sc >>= flip whenJust (windows . f))
        | (key, sc) <- zip [xK_w, xK_e, xK_r] [0..]
        , (f, m) <- [(W.view, 0), (W.shift, shiftMask)]]


------------------------------------------------------------------------
-- Mouse bindings: default actions bound to mouse events
--
myMouseBindings (XConfig {XMonad.modMask = modm}) = M.fromList $

    -- mod-button1, Set the window to floating mode and move by dragging
    [ ((modm, button1), (\w -> focus w >> mouseMoveWindow w
                                       >> windows W.shiftMaster))

    -- mod-button2, Raise the window to the top of the stack
    , ((modm, button2), (\w -> focus w >> windows W.shiftMaster))

    -- mod-button3, Set the window to floating mode and resize by dragging
    , ((modm, button3), (\w -> focus w >> mouseResizeWindow w
                                       >> windows W.shiftMaster))

    -- you may also bind events to the mouse scroll wheel (button4 and button5)
    ]

------------------------------------------------------------------------
-- Layouts:

-- You can specify and transform your layouts by modifying these values.
-- If you change layout bindings be sure to use 'mod-shift-space' after
-- restarting (with 'mod-q') to reset your layout state to the new
-- defaults, as xmonad preserves your old layout settings by default.
--
-- The available layouts.  Note that each layout is separated by |||,
-- which denotes layout choice.
--
myLayout = tiled ||| Mirror tiled ||| Full
  where
     -- default tiling algorithm partitions the screen into two panes
     tiled   = Tall nmaster delta ratio

     -- The default number of windows in the master pane
     nmaster = 1

     -- Default proportion of screen occupied by master pane
     ratio   = 1/2

     -- Percent of screen to increment by when resizing panes
     delta   = 3/100

------------------------------------------------------------------------
-- Window rules:

-- Execute arbitrary actions and WindowSet manipulations when managing
-- a new window. You can use this to, for example, always float a
-- particular program, or have a client always appear on a particular
-- workspace.
--
-- To find the property name associated with a program, use
-- > xprop | grep WM_CLASS
-- and click on the client you're interested in.
--
-- To match on the WM_NAME, you can use 'title' in the same way that
-- 'className' and 'resource' are used below.
--
myManageHook = composeAll
    [ className =? "MPlayer"        --> doFloat
    , className =? "Gimp"           --> doFloat
    , resource  =? "desktop_window" --> doIgnore
    , resource  =? "kdesktop"       --> doIgnore ]

------------------------------------------------------------------------
-- Event handling

-- * EwmhDesktops users should change this to ewmhDesktopsEventHook
--
-- Defines a custom handler function for X Events. The function should
-- return (All True) if the default handler is to be run afterwards. To
-- combine event hooks use mappend or mconcat from Data.Monoid.
--
myEventHook = mempty

------------------------------------------------------------------------
-- Status bars and logging

-- Perform an arbitrary action on each internal state change or X event.
-- See the 'XMonad.Hooks.DynamicLog' extension for examples.
--
myLogHook = return ()

------------------------------------------------------------------------
-- Startup hook

-- Perform an arbitrary action each time xmonad starts or is restarted
-- with mod-q.  Used by, e.g., XMonad.Layout.PerWorkspace to initialize
-- per-workspace layout choices.
--
-- By default, do nothing.
myStartupHook = return ()

------------------------------------------------------------------------
-- Now run xmonad with all the defaults we set up.

-- Run xmonad with the settings you specify. No need to modify this.
--
main = xmonad defaults

-- A structure containing your configuration settings, overriding
-- fields in the default config. Any you don't override, will
-- use the defaults defined in xmonad/XMonad/Config.hs
--
-- No need to modify this.
--
defaults = def {
      -- simple stuff
        terminal           = myTerminal,
        focusFollowsMouse  = myFocusFollowsMouse,
        clickJustFocuses   = myClickJustFocuses,
        borderWidth        = myBorderWidth,
        modMask            = myModMask,
        workspaces         = myWorkspaces,
        normalBorderColor  = myNormalBorderColor,
        focusedBorderColor = myFocusedBorderColor,

      -- key bindings
        keys               = myKeys,
        mouseBindings      = myMouseBindings,

      -- hooks, layouts
        layoutHook         = myLayout,
        manageHook         = myManageHook,
        handleEventHook    = myEventHook,
        logHook            = myLogHook,
        startupHook        = myStartupHook
    }

-- | Finally, a copy of the default bindings in simple textual tabular format.
help :: String
help = unlines ["The default modifier key is 'alt'. Default keybindings:",
    "",
    "-- launching and killing programs",
    "mod-Shift-Enter  Launch xterminal",
    "mod-p            Launch dmenu",
    "mod-Shift-p      Launch gmrun",
    "mod-Shift-c      Close/kill the focused window",
    "mod-Space        Rotate through the available layout algorithms",
    "mod-Shift-Space  Reset the layouts on the current workSpace to default",
    "mod-n            Resize/refresh viewed windows to the correct size",
    "",
    "-- move focus up or down the window stack",
    "mod-Tab        Move focus to the next window",
    "mod-Shift-Tab  Move focus to the previous window",
    "mod-j          Move focus to the next window",
    "mod-k          Move focus to the previous window",
    "mod-m          Move focus to the master window",
    "",
    "-- modifying the window order",
    "mod-Return   Swap the focused window and the master window",
    "mod-Shift-j  Swap the focused window with the next window",
    "mod-Shift-k  Swap the focused window with the previous window",
    "",
    "-- resizing the master/slave ratio",
    "mod-h  Shrink the master area",
    "mod-l  Expand the master area",
    "",
    "-- floating layer support",
    "mod-t  Push window back into tiling; unfloat and re-tile it",
    "",
    "-- increase or decrease number of windows in the master area",
    "mod-comma  (mod-,)   Increment the number of windows in the master area",
    "mod-period (mod-.)   Deincrement the number of windows in the master area",
    "",
    "-- quit, or restart",
    "mod-Shift-q  Quit xmonad",
    "mod-q        Restart xmonad",
    "mod-[1..9]   Switch to workSpace N",
    "",
    "-- Workspaces & screens",
    "mod-Shift-[1..9]   Move client to workspace N",
    "mod-{w,e,r}        Switch to physical/Xinerama screens 1, 2, or 3",
    "mod-Shift-{w,e,r}  Move client to screen 1, 2, or 3",
    "",
    "-- Mouse bindings: default actions bound to mouse events",
    "mod-button1  Set the window to floating mode and move by dragging",
    "mod-button2  Raise the window to the top of the stack",
    "mod-button3  Set the window to floating mode and resize by dragging"]
```

<div class="src-block-caption">
  <span class="src-block-number"><a href="#code-snippet--xmonad1-default">Code Snippet 5</a></span>:
  Default XMonad confiuration
</div>
