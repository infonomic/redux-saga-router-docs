---
sidebar_position: 2
---

# Locations

Location templates including paths and parameters are defined separately from routes.

## Example

So for the following components...

```
ModuleFolder
|__ModuleNameList.js
|__ModuleNameShow.js
```

... the location definitions will look like (although the components above are not referenced here - see the routes documentation)

```
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
