[![Build Status](https://travis-ci.org/nmccready/bootstrap-iconpicker.svg?branch=master)](https://travis-ci.org/nmccready/bootstrap-iconpicker)
[![Code Climate](https://codeclimate.com/github/nmccready/bootstrap-iconpicker/badges/gpa.svg)](https://codeclimate.com/github/nmccready/bootstrap-iconpicker)
[![Bower](http://img.shields.io/bower/v/bootstrap-iconpicker.svg)](http://bower.io/search/?q=bootstrap-iconpicker)
[![Tag](http://img.shields.io/github/tag/nmccready/bootstrap-iconpicker.svg)](https://github.com/nmccready/bootstrap-iconpicker/tags)
[![Release](http://img.shields.io/github/release/nmccready/bootstrap-iconpicker.svg)](https://github.com/nmccready/bootstrap-iconpicker/releases)
[![Issues](http://img.shields.io/github/issues/nmccready/bootstrap-iconpicker.svg)](https://github.com/nmccready/bootstrap-iconpicker/issues?q=is%3Aopen)
[![Issues](http://img.shields.io/badge/license-MIT-red.svg)](https://github.com/nmccready/bootstrap-iconpicker/blob/master/LICENSE)

# [Bootstrap-Iconpicker v1.7.0](http://nmccready.github.io/bootstrap-iconpicker)
![Iconpicker](bootstrap-iconpicker.png)

A simple iconpicker for Bootstrap 3.x.

Please note that this project is for [Bootstrap 3.x](http://getbootstrap.com/), including Glyphicons.
Other icon fonts thats supports: [Elusive Icons](http://press.codes/downloads/elusive-icons-webfont/), [Font Awesome](http://fontawesome.io/), [Ionicons](http://ionicons.com/), [Map Icons](http://map-icons.com/), [Material Design Icons](http://zavoloklom.github.io/material-design-iconic-font/), [Octicons](https://octicons.github.com/), [Typicons](http://typicons.com), [Weather Icons](http://erikflowers.github.io/weather-icons/).

## Table of contents
- [Quick start](#quick-start)
- [Documentation and live examples](#documentation-and-live-examples)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Changelog](#changelog)
- [Versioning](#versioning)
- [Author](#author)
- [Contributors](#contributors)
- [License](#license)

## Quick start

Three quick start options are available:

- Download the latest release: [![Tag](http://img.shields.io/github/release/nmccready/bootstrap-iconpicker.svg)](https://github.com/nmccready/bootstrap-iconpicker/archive/v1.7.0.zip).
- Clone the repo: `git clone https://github.com/nmccready/bootstrap-iconpicker.git`.
- Install with [Bower](http://bower.io): `bower install bootstrap-iconpicker`.

### What's included
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
bootstrap-iconpicker/
├── css/
│   ├── bootstrap-iconpicker.css
├── js/
│   ├── iconset/
│       ├── iconset-all.min.js
│       ├── iconset-elusiveicon.js
│       ├── iconset-fontawesome.js
│       ├── iconset-fontawesome.js
│       ├── iconset-fontawesome.js
│       ├── iconset-fontawesome.js
│       ├── iconset-glyphicon.js
│       ├── iconset-ionicon.js
│       ├── iconset-mapicon.js
│       ├── iconset-materialdesign.js
│       ├── iconset-octicon.js
│       ├── iconset-typicon.js
│       ├── iconset-weathericon.js
│   ├── bootstrap-iconpicker.js
```

We provide compiled CSS and JS (`bootstrap-iconpicker.*`), as well as compiled and minified CSS and JS (`bootstrap-iconpicker.min.*`).

## Documentation and live examples
See documentation and live examples here: [http://nmccready.github.io/bootstrap-iconpicker](http://nmccready.github.io/bootstrap-iconpicker)

## Bugs and feature requests
Have a bug or a feature request? [Please open a new issue](https://github.com/nmccready/bootstrap-iconpicker/issues). Before opening any issue, please search for existing issues and read the [Issue Guidelines](https://github.com/necolas/issue-guidelines), written by [Nicolas Gallagher](https://github.com/necolas/).
You may use [this JSFiddle](http://jsfiddle.net/victor_valencia/y1q541ar/) as a template for your bug reports.

## Changelog
- [![v1.7.0](http://img.shields.io/badge/zip-v1.7.0-blue.svg)](https://github.com/nmccready/bootstrap-iconpicker/archive/v1.7.0.zip).
    - Support for button and div tags.
    - All `iconset` includes the empty icon value.
    - Option `rows` accepts the value 0 to indicate all rows.
    - Add options:
        - `align`
        - `header`
        - `footer`
    - Add methods:
        - `setAlign`
        - `setHeader`
        - `setFooter`
    - Support for 1 more icon fonts:
        - [Material Design Icons v1.1.1](http://zavoloklom.github.io/material-design-iconic-font/)
- [![v1.6.0](http://img.shields.io/badge/zip-v1.6.0-blue.svg)](https://github.com/nmccready/bootstrap-iconpicker/archive/v1.6.0.zip).
    - Restructure `iconset` configuration.
    - Option `iconset` accepts `String` and `Object` (Limit your `iconset` option).
    - Add options:
        - `arrowPrevIconClass`
        - `arrowNextIconClass`
        - `labelHeader`
        - `labelFooter`
    - Add methods:
        - `setArrowClass`
        - `setArrowPrevIconClass`
        - `setArrowNextIconClass`
        - `setCols`
        - `setIconset`
        - `setLabelHeader`
        - `setLabelFooter`
        - `setPlacement`
        - `setRows`
        - `setSearch`
        - `setSearchText`
        - `setSelectedClass`
        - `setUnselectedClass`
    - Support for 6 more icon fonts:
        - [Elusive Icons v2.0.0](http://press.codes/downloads/elusive-icons-webfont/)
        - [Ionicons v1.5.2](http://ionicons.com/)
        - [Map Icons v2.1.0](http://map-icons.com/)
        - [Octicons v2.1.2](https://octicons.github.com/)
        - [Typicons v2.0.6](http://typicons.com)
        - [Weather Icons v1.2.0](http://erikflowers.github.io/weather-icons/)
- [![v1.5.0](http://img.shields.io/badge/zip-v1.5.0-blue.svg)](https://github.com/nmccready/bootstrap-iconpicker/archive/v1.5.0.zip).
    - Add search field.
- [![v1.4.0](http://img.shields.io/badge/zip-v1.4.0-blue.svg)](https://github.com/nmccready/bootstrap-iconpicker/archive/v1.4.0.zip).
    - Support for customization of the component.
- [![v1.3.1](http://img.shields.io/badge/zip-v1.3.1-blue.svg)](https://github.com/nmccready/bootstrap-iconpicker/archive/v1.3.1.zip).
    - Bind `body` `click` to solve issues for ajax loaded pages. @[crlcu](https://github.com/crlcu)
- [![v1.3.0](http://img.shields.io/badge/zip-v1.3.0-blue.svg)](https://github.com/nmccready/bootstrap-iconpicker/archive/v1.3.0.zip).
    - Support multiple versions (v4.0.0, v4.1.0, v4.2.0) of [Font Awesome Icons](http://fontawesome.io/).
- [![v1.2.1](http://img.shields.io/badge/zip-v1.2.1-blue.svg)](https://github.com/nmccready/bootstrap-iconpicker/archive/v1.2.1.zip).
    - Add `.iconpicker-popover` class. @[jwhitfieldseed](https://github.com/jwhitfieldseed)
- [![v1.2.0](http://img.shields.io/badge/zip-v1.2.0-blue.svg)](https://github.com/nmccready/bootstrap-iconpicker/archive/v1.2.0.zip).
    - Add the method `setIcon`.
- [![v1.1.0](http://img.shields.io/badge/zip-v1.1.0-blue.svg)](https://github.com/nmccready/bootstrap-iconpicker/archive/v1.1.0.zip).
    - Dispatch `change` event when an iconpicker is changed. @[promatik](https://github.com/promatik)
- [![v1.0.1](http://img.shields.io/badge/zip-v1.0.1-blue.svg)](https://github.com/nmccready/bootstrap-iconpicker/archive/v1.0.1.zip).
    - Reducing the size of the source file.
- [![v1.0.0](http://img.shields.io/badge/zip-v1.0.0-blue.svg)](https://github.com/nmccready/bootstrap-iconpicker/archive/1.0.0.zip).
    - Version initial.

## Versioning
For transparency into our release cycle and in striving to maintain backward compatibility, Bootstrap-Iconpicker is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

- Breaking backward compatibility **bumps the major** while resetting minor and patch
- New additions without breaking backward compatibility **bumps the minor** while resetting the patch
- Bug fixes and misc changes **bumps only the patch**

For more information on SemVer, please visit <http://semver.org/>.

## Author
@[nmccready](https://github.com/nmccready)

## Contributors
@[nmccready](https://github.com/nmccready), @[promatik](https://github.com/promatik), @[jwhitfieldseed](https://github.com/jwhitfieldseed), @[crlcu](https://github.com/crlcu)

## License
Licensed under [the MIT license](LICENSE).
