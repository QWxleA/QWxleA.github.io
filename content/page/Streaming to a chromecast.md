---
public: true
date: 2022-04-08
icon: 🥸
category: macos
tags:
- video
title: Streaming to a chromecast
categories: macos
lastMod: 2022-04-17
---
My mom complained about an English only TV series on Disney+. What's a helpful son to do?

As it happens, streaming to a Chromecast is not hard, but sending subtitles to it seems to be all but impossible. So, hardcoded subs it is (Just like the nineties, how retro!).

## Step by step

  + This was the easiest way to get some subtitled videos on TV:
+ Take an English only video file, from _somewhere_ on the  internet (exercise left to the reader.)
+ Find subtitles, cannot find anything in Dutch, find in English, easy to do.
+ Translate with Google translate (surprisingly good, Ulysses this tv-series is not, but still, happily surprised).
+ The timings are often wrong. [SubShifter - Online SRT Subtitle Resync Tool](https://subshifter.bitsnbites.eu/) is a good tool. I just use VLC to find when people start to talk and sync with this. The couple of times I've done this it was just to find a correct start.
+ Next the key to the whole conundrum: [HandBrake: Open Source Video Transcoder](https://handbrake.fr/). This app has been around for years, but is still actively developed and relatively easy to use.
+ A good alternative is [Subler](https://subler.org/), it is *way* faster, but cannot hardcode subs, so  for this Handbrake is the obvious choice.

  + ### Handbrake

    + To setup Handbrake for encoding on an M1, you need to use the correct settings (the app is universal):
Configuration: **Video** > **H.265 (VideoToolbox)** & **Chromecast 1080p**

![handbrake.png](/assets/handbrake_1649418443446_0.png)

    + These settings cut the encoding time in half (still _not_ instantaneous). Next, add everything to the queue and get something to eat.

### Playback — attempt 1

  + The easiest way to send a video file to a Chromecast is using the Chrome Browser:
+ Serve files: `python3 -m http.server 8080`+
+ Open in Google Chrome+
+ `⫶` > **Cast** > **TV (Chromecast)**, done+


  + Worked well, but no way I get my mom to run a local webserver.

### Playback — attempt 2

  + VLC is a decent player, and it's _old_, so people are bound to have used it:
+ Use VLC to stream, open file
+ Then **Playback** > **Renderer** > **TV (Chromecast)**
