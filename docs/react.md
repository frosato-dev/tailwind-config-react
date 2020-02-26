# React

## Install

```
 npm i tailwind-config-react
```

ou

```
 yarn add tailwind-config-react
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

import 'tailwind-config-react/react/dist/index.css' // Optional, you can import your own styles
import { Colors } from 'tailwind-config-react/react'

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

import 'tailwind-config-react/react/dist/index.css' // Optional, you can import your own styles
import { Boxes } from 'tailwind-config-react/react'

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

import 'tailwind-config-react/react/dist/index.css' // Optional, you can import your own styles
import { Boxes } from 'tailwind-config-react/react'

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