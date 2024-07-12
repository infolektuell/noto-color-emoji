# Noto Color Emoji

This package contains my solution to use Noto Color Emoji font in different browsers.

- [@fontsource/noto-color-emoji][fontsource] does not seam to work in Edge or Chrome.
- The woff2-fonts downloaded from [Google Fonts] do not work in safari browsers.
- For color fonts, there are two competing standards (COLRv1 and OpenType-SVG), and none of them is supported in all browsers.
- The [Google Fonts] files seem to be COLRv1.
- I don't know what the [Fontsource] files contain, but they work in safari. Maybe OT-SVG?
- The css declarations in this package use the [New font-face syntax] with the `tech` function,
  so browsers with COLRv1 support can load the google font files, whereas others can load the fontsource files.
- The package ships all needed font files in woff2 format.

## Install

```sh
npm i infolektuell/noto-color-emoji
```

## Usage

If you're using vite or vite-based bundler, import this package in your css:

```css
@import 'infolektuell/noto-color-emoji';
```

[google fonts]: https://fonts.google.com/noto/specimen/Noto+Color+Emoji
[fontsource]: https://fontsource.org/fonts/noto-color-emoji
[new font-face syntax]: https://fullystacked.net/new-font-face-syntax/
