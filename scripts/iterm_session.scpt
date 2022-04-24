#!/usr/bin/osascript

tell application "iTerm2"
    tell current window
        create tab with profile "qwblog"
    end tell

    tell first session of current tab of current window
        set name to "Testing Blog"
        split horizontally with profile "qwblog"
        write text "make"
    end tell
    tell second session of current tab of current window
        write text "make watch"
    end tell
end tell
