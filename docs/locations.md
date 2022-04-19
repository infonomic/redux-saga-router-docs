---
sidebar_position: 2
---

# Locations

## Locations file example

So for this structure ...

```
ModuleFolder
|__ModuleNameList.js
|__ModuleNameShow.js
```

... locations file will look like that

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
