# Tailwind Config Showcase

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg)](#contributors-)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

🎨Components UI kit to visualize your Tailwind config with ease !

[demo]: ./docs/images/demo.gif 'Component preview example'

![Component preview example][demo]

# React

## Install

```
 npm i @tailwind-react-showcase/react
```

ou

```
 yarn add @tailwind-react-showcase/react
```

## Components

### Colors

Showcase a list of Color elements

#### Props

| name      | type     | description                                        |
| --------- | -------- | -------------------------------------------------- |
| config    | required | your tailwind config file                          |
| path      | required | the path to the key you want to showcase           |
| className | optional | extra className to apply to the showcase component |

#### Exemple

```javascript
import React from 'react'

import '@tailwind-react-showcase/react/dist/index.css' // Optional, you can import your own styles
import { Colors } from '@tailwind-react-showcase/react'

const config = require('./tailwind.config.js')

function App() {
    return (
        <>
            <Colors config={config} path={'theme.colors'} />;
            <Colors config={config} path={'theme.backgroundColor'} />;
        </>
    )
}
```

### Boxes

Showcase a list of Boxe elements

#### Props :

| name      | type     | description                                        |
| --------- | -------- | -------------------------------------------------- |
| config    | required | your tailwind config file                          |
| path      | required | the path to the key you want to showcase           |
| className | optional | extra className to apply to the showcase component |

#### Exemple

```javascript
import React from 'react'

import '@tailwind-react-showcase/react/dist/index.css' // Optional, you can import your own styles
import { Boxes } from '@tailwind-react-showcase/react'

const config = require('./tailwind.config.js')

function App() {
    return (
        <>
            <Boxes config={config} path={'theme.boxShadow'} />
            <Boxes config={config} path={'theme.borderWidth'} />
            <Boxes config={config} path={'theme.borderRadius'} />
            <Boxes config={config} path={'theme.opacity'} />
        </>
    )
}
```

### Texts

Showcase a list of Texts elements

#### Props :

| name      | type     | description                                        |
| --------- | -------- | -------------------------------------------------- |
| config    | required | your tailwind config file                          |
| path      | required | the path to the key you want to showcase           |
| className | optional | extra className to apply to the showcase component |
| text      | optional | The text to showcase - default: Lorem ipsum        |

#### Exemple

```javascript
import React from 'react'

import '@tailwind-react-showcase/react/dist/index.css' // Optional, you can import your own styles
import { Boxes } from '@tailwind-react-showcase/react'

const config = require('./tailwind.config.js')

function App() {
    return (
        <>
            <Texts config={config} path={'theme.fontFamilly'} />
            <Texts config={config} path={'theme.fontSize'} />
            <Texts config={config} path={'theme.lineHeight'} />
            <Texts config={config} path={'theme.textColor'} />
        </>
    )
}
```

# Angular

@TODO

# VueJS

@TODO

# Svelte

@TODO

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
