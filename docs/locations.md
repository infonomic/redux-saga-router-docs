---
sidebar_position: 4
title: Locations
---

Location templates including paths and parameters are defined separately from routes.
## Example
```
 └── ModuleFolder
     ├── ModuleNameList.js
     └── ModuleNameShow.js
```

```js
export default {
  list: createLocationTemplate({
    name: 'module-name/list',
    path: '/module-name',
  }),
  show: createLocationTemplate({
    name: 'module-name/show',
    params: ['id'], // Here you can also set up a dynamic params in route
    path: '/module-name/:id',
  }),
}
```
