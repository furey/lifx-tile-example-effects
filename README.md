# lifx-tile-example-effects

A collection of example [LIFX Tile](https://www.lifx.com/collections/creative-tiles) effects. 💁‍💡

## Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Help](#help)
- [Credits](#credits)
- [License](#license)

## Requirements

- `node -v` >= v12.10.0
- `npm -v` >= 6.10.3
- One or more [LIFX Tiles](https://www.lifx.com/collections/creative-tiles) accessible via LAN

## Installation

```console
$ npm install
```

## Usage

```console
$ node lifx-tile-example-effects

? Choose an effect …
❯ beachball
  random-color
  random-colors
  random-pixels
  smiley

✔ Choose an effect · beachball
Starting beachball effect… (press [ctrl+c] to exit)
```

## Help

```console
$ node lifx-tile-example-effects --help

Usage: node lifx-tile-example-effects [options]

Options:
  --effect, -e   Effect name
                [string] [choices: "beachball", "random-color", "random-colors",
                                                      "random-pixels", "smiley"]
  --clear, -c    Clear device cache                                    [boolean]
  --verbose, -v  Show debug logs                                       [boolean]
  --version, -V  Show version number                                   [boolean]
  --help, -h     Show help                                             [boolean]

Examples:
  node lifx-tile-example-effects --effect beachball

Credits:
  Copyright (c) James Furey (https://github.com/furey)
```

## Credits

This repo uses the [lifx-tile-effects-framework](https://github.com/furey/lifx-tile-effects-framework). 👨‍🔬💡

## License

ISC License

Copyright (c) 2019, James Furey

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
