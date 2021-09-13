---
title: "Using Btrfs for Home on ElementaryOS"
date: 2021-09-03
lastmod: 2021-09-12
tags:
- elementaryos
- btrfs
categories:
- linux
---

ElementaryOS is a gorgeous Linux distribution, and ever since they [released Odin](https://blog.elementary.io/elementary-os-6-odin-released), I've been dying to try it. After installing it in a VM, and seeing the last bugs get ironed out, I finally caved, and installed it. It's fabulous!

If you've been listening to rumors, there have been some complaints about the lack of software, and some of the defaults, but imho, with [elementary OS 6 Updates for August, 2021](https://blog.elementary.io/elementary-os-6-odin-updates-august-2021/) those complaints should be layed to rest. It's very easy to add [Flathub](https://flathub.org/home), and that, combined with the underlying Ubuntu packages, almost anything you can think of can be installed.

But, it's not all rainbows and unicorns. It's impossible (as fas as I know), to install ElementaryOS **on** Btrfs. And I wanted to use it at *least* for my `/home`. The following is how you can set that up (disclaimer, this can seriously mess up your install. If you don't know what any of this means, don't do it!):

## What we\'re aiming for


The end-product is this:
```bash {linenos=table,hl_lines=[8,11],linenostart=1}
$ sudo lsblk -f /dev/sda

NAME            FSTYPE      LABEL UUID                                   FSAVAIL FSUSE% MOUNTPOINT
sda
├─sda1          vfat              336E-86E5                               251.7M     4% /boot/efi
├─sda2          ext4              0b3ad1d4-bbc5-42c5-a44b-4574a7c18fa4    316.5M    23% /boot
└─sda3          crypto_LUKS       6264e4ed-d493-44b9-966b-a5eaf887a3ab
└─cryptdata   LVM2_member       Uhf4VJ-VO1z-a5FI-ppNz-zzVB-2RFZ-C6Rpm0
├─data-root ext4              13c02579-526b-4652-a792-b41286ac3a81     14.6G    44% /
├─data-swap swap              b9c6201c-2f90-4b49-a3d9-91232264568c                  [SWAP]
└─data-home btrfs             15669fa8-d62d-4925-a826-6153e65aaa6a    236.8G    46% /home
```

Figure 1.

If, on a regular Elementary install, you would run the `sudo lsblk -f /dev/sda` command, you would see about the same thing, just with different UUIDs, and missing `data-home`.

## Adding a Btrfs /home


If you look at Figure 1, line 8, you see Elementary uses LVM. LVM has several (preinstalled) tools that making changes to your drive layout simple:

`Vgdisplay` prints information about the complete Volume Group, among it's output, the *name* **data** in my case.

`Lvdisplay` prints information about the logical volumes defined inside to VG, this one is usefull to see if resizing data-root and creating data-home worked.

Now the tools we will use (do all this from the Elementary installer, or some other live-image, most, if not all these commands need *sudo*):
1. Unlock the encryped volume: `cryptsetup luksOpen /dev/sda3 encrypted_system`
2. Is it all there? `lvdisplay`
3. Make sure you're drive is clean: `e2fsck - f /dev/data/root`
4. Optional: `resize2fs /dev/data/root 30G`
5. The key command: `lvreduce - L 30G - r /dev/data/root`. Not using `-r` (or first doing 4) will make the system unbootable. Ext4 doesn't like finding it's space suddenly reduced!
6. Next, we can create a new logical volume in the free space: `lvcreate  - l 100%FREE -n home data`. `-n` indicates the name, data is the Volume Group
7. create filesystem: `mkfs.btrfs /dev/data/home`
8. Copy the UUID (if you forget, you can use `lsblk`, as in figure 1)
9. Mount data-root: `mount /dev/data/root /mnt`
10. Add your new drive to fstab: `vi /mnt/etc/fstab`
``` bash {linenos=table,hl_lines=[6],linenostart=1}
# <file system>  <mount point>  <type>  <options>  <dump>  <pass>
PARTUUID=842cba63-fc3f-49ba-b03e-a215549fc81e  /boot/efi  vfat  umask=0077  0  0
UUID=0b3ad1d4-bbc5-42c5-a44b-4574a7c18fa4  /boot  ext4  noatime,errors=remount-ro  0  0
UUID=13c02579-526b-4652-a792-b41286ac3a81  /  ext4  noatime,errors=remount-ro  0  0
/dev/mapper/data-swap  none  swap  defaults  0  0
UUID=15669fa8-d62d-4925-a826-6153e65aaa6a /home btrfs noatime,ssd,space_cache,commit=120,compress=zstd,discard=async,x-systemd-timeout=0 0 0
```

Figure 2.
{{< hint tip >}}
If you have used the system already, rename your old `/home`, so you can copy the data to the new drive
{{< /hint >}}

That's it, now your `/home` can use snapshots, compression and all the other goodies from a modern FS.
