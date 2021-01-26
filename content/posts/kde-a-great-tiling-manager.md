+++
title = "KDE - a great tiling manager"
author = ["Alex Qwxlea"]
lastmod = 2021-01-26T21:58:30+02:00
draft = true
+++

Tiling window managers are very popular on Linux. The most popular one is probably I3, but there is plenty of choice. The reason that these window managers are so popular is tat they improve productivity, it is faster to move around with the keyboard, then with the mouse.

KDE is a great desktop, but it is mostly mouse-centric. But, there is hope: **Kröhnkite**

From the [website](https://github.com/esjeon/krohnkite):

> A dynamic tiling extension for KWin.
>
> Kröhnkite is mainly inspired by dwm from suckless folks, and aims to provide rock solid stability while fully integrating into KWin.
>
> The name of the script is from mineral Kröhnkite; it starts with K and looks cool.

Install:

1.  `Window management`
2.  `Kwin scripts`
3.  `Get new scripts`
4.  Find `krohnkite`

{{< figure src="/images/krohnkite-install.png" >}}

Alternative: download and install:

```shell
wget https://github.com/esjeon/krohnkite/releases/download/v0.7/krohnkite-0.7.kwinscript
plasmapkg2 -t kwinscript -i krohnkite-0.7.kwinscript
```

For some versions of krohnkite you need to do the following:

```shell
mkdir -p ~/.local/share/kservices5/
ln -s ~/.local/share/kwin/scripts/krohnkite/metadata.desktop ~/.local/share/kservices5/krohnkite.desktop
```


## Further configuration {#further-configuration}

****Removing Title Bars****

Breeze window decoration can be configured to completely remove title bars from all windows:

1.  `System Setting` > `Application Style` > `Window Decorations`
2.  Click `Configure Breeze inside` the decoration preview.
3.  `Window-Specific Overrides` tab > `Add` button
4.  Enter the followings, and press `Ok`:
    -   Regular expression to match: `.*`
    -   Tick `Hide window title bar`

{{< figure src="/images/krohnkite-titlebars.png" >}}

****Note:**** you can use the icons in the panel if you need to send an app to another workspace or activity (or use a shortcut)

****Changing Border Colors****

```shell
kwriteconfig5 --file ~/.config/kdeglobals --group WM --key frame 61,174,233
kwriteconfig5 --file ~/.config/kdeglobals --group WM --key inactiveFrame  239,240,241
```

****Note:**** You must restart your session to see changes. (i.e. re-login, reboot)

****Other settings****

-   Setting Minimum Geometry Size
-   Setting Up for Multi-Screen

See: [the repo's README](https://github.com/esjeon/krohnkite).


## Default keybindings {#default-keybindings}

| Key              | Action             |
|------------------|--------------------|
| Meta + J         | Focus Down/Next    |
| Meta + K         | Focus Up/Previous  |
| Meta + H         | Left               |
| Meta + L         | Right              |
| Meta + Shift + J | Move Down/Next     |
| Meta + Shift + K | Move Up/Previous   |
| Meta + Shift + H | Move Left          |
| Meta + Shift + L | Move Right         |
| Meta + I         | Increase           |
| Meta + D         | Decrease           |
| Meta + F         | Toggle Floating    |
| Meta + \\        | Cycle Layout       |
| Meta + Return    | Set as Master      |
| Meta + T         | Use Tile Layout    |
| Meta + M         | Use Monocle Layout |
| unbound          | Use Spread Layout  |
| unbound          | Use Stair Layout   |


## References {#references}

-   <https://www.youtube.com/watch?v=sa7gzTRA-BA>
-   <https://github.com/esjeon/krohnkite>
-   <https://github.com/wsdfhjxc/kwin-scripts>
