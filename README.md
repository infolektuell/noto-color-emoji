# Noto Color Emoji

[![npm version](https://badge.fury.io/js/@infolektuell%2Fnoto-color-emoji.svg)](https://badge.fury.io/js/@infolektuell%2Fnoto-color-emoji)

This npm package contains my solution to use Noto Color Emoji font in different browsers.
It's just css with font-face declarations and respective font files, install and import it in vite projects and alike.

## Why this package?

- [@fontsource/noto-color-emoji][fontsource] [does not work in Edge or Chrome, just in Safari][issue].
- For color fonts, there are two competing standards (COLRv1 and OpenType-SVG),
  and none of them is supported in all browsers.
- Chrome, Edge, and friends want COLRv1, Safari wants SVG, Firefox is ok with both of them.
- [Google Fonts] dynamically generates the css containing compatible font-face declarations based on user agent.
  But I want to host the files statically.
- The fontsource package only ships font files with SVG tables, no COLRv1.
- This package ships all needed font files of both types in woff2 format.
  They were downloaded from [Google Fonts] using Firefox and Safari on Mac.
- The css declarations in this package use the [New font-face syntax] with the `tech` function,
  so browsers can decide to load either COLRv1 or SVG tables.

## Install

```sh
npm i @infolektuell/noto-color-emoji
```

## Usage

If you're using vite or vite-based bundler, import this package in your css:

```css
@import '@infolektuell/noto-color-emoji';
```

[issue]: https://github.com/fontsource/fontsource/issues/588
[google fonts]: https://fonts.google.com/noto/specimen/Noto+Color+Emoji
[fontsource]: https://fontsource.org/fonts/noto-color-emoji
[new font-face syntax]: https://fullystacked.net/new-font-face-syntax/
