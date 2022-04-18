---
sidebar_position: 2
---

# Locations

## Location templates?

## Locations file example

So for this structure ...

```
ModuleFolder
|__ModuleNameList.js
|__ModuleNameCreate.js
|__ModuleNameShow.js
|__ModuleNameEdit.js
|__ModuleNameDelete.js
```

... locations file will look like that

```
export default {
  list: createLocationTemplate({
    name: 'module-name/list',
    path: '/module-name',
  }),
  create: createLocationTemplate({
    name: 'module-name/create',
    path: '/module-name/create',
  }),
  show: createLocationTemplate({
    name: 'module-name/show',
    params: ['id'], // Here you can also set up a dynamic params in route
    path: '/module-name/:id',
  }),
  edit: createLocationTemplate({
    name: 'module-name/edit',
    params: ['id'],
    path: '/module-name/:id/edit',
  }),
  delete: createLocationTemplate({
    name: 'module-name/delete',
    params: ['id'],
    path: '/module-name/:id/delete',
  }),
}
```
