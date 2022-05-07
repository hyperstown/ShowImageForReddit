# ShowImageForReddit

Disable default Reddit's image cropping.

Remove See Full Image button.

## Why?
Reddit for some reason crops larger images. If user wants to see full image they need to click this button:

![see_full_image_button](assets/button.png)

The issue however is that the button does exactly the same thing as just clicking the image which makes this button useless. 

Clicking image or button takes you to the post details. - Far from the ideal outcome.

One could except clicking button shows full image without taking user to the post. My solution however is to remove cropping completely.


## Installation

- Download [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) for Firefox

- Download [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) for Chromium/Chrome/Brave

- [Click here](https://raw.githubusercontent.com/hyperstown/ShowImageForReddit/master/showImg.user.js) to initialize installer.

- Installation popup should appear. Click install / OK

- Done

## Manual installation

- Download [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) for Firefox

- Download [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) for Chromium/Chrome/Brave

- Click add new user script

- Copy contents from `showImg.user.js` into editor.

- Save

- Done


## Known issues:

- Lager images can cause problems with scroll. (Feel free to open PR if you know how to fix it)
