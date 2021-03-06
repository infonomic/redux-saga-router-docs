---
sidebar_position: 4
title: Routes
---

Route definitions combine location templates, with components and route options, including an optional initial saga.

Note that the default layout defined in the RouterView will be used unless specified by the `layout` option of the router configuration.

Also note that the entire route configuration object and all its properties, are available at any time to React via `useCurrentRoute` hook. For example the route configuration could include an configured 'icon' that might be shown in a menu or breadcrumb collection etc.

For more information on `locations.js` file check [this doc](/docs/locations/)

## Example

```git
 ├── ModuleFolder
 │    └── components
 │    │   └── ModuleNameList.js
 │    │   └── ModuleNameShow.js
+│    ├── locations.js
+│    └── routes.js  
```


```js title=src/modules/ModuleFolder/routes.js
import React from 'react'

import * as L from '../../locationTemplates'
import { sagas } from './sagas'

const ModuleNameList = import('./components/ModuleNameList')
const ModuleNameShow = import('./components/ModuleNameShow')

export default [
  {
    template: L.ModuleName.list, // Location name defined in locations.js for this module
    title: 'Module List',
    requiresAuth: true, // Access option
    saga: sagas.fetchList, // A Saga provided here will be dispatched on route navigate. Check next section for more info about sagas
    components: {
      main: ModuleNameList, // Component that will be rendered under this route
    },
  },
  {
    template: L.ModuleName.show, // Location name defined in locations.js for this module
    title: 'Module Show',
    requiresAuth: true, // Access option
    saga: sagas.show, // A Saga provided here will be dispatched on route navigate. Check next section for more info about sagas
    components: {
      main: ModuleNameShow, // Component that will be rendered under this route
    },
  }
]
```


