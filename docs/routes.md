---
sidebar_position: 3
title: Routes
---

Route definitions combine location templates, with components and route options, including an optional initial saga.

For more information on `locations.js` file check [this doc](/docs/locations/)

```jsx
import React from 'react'

import * as L from '../../locationTemplates'
import { sagas } from './sagas'

const ModuleNameList = import('./components/ModuleNameList')

export default [
  {
    template: L.ModuleName.list, // Location name defined in locations.js for this module
    title: 'Module Name',
    requiresAuth: true, // Access option
    saga: sagas.fetchList, // Saga provided here will be fired on component mount. Check next section for more info about sagas
    components: {
      main: ModuleNameList, // Component that will be rendered under this route
    },
  }
]
```


