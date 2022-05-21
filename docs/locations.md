---
sidebar_position: 3
title: Locations
---

Routes in the router are configured by creating both a location template and a [route](/docs/routes) configuration object.

Location templates define the path to the route, with any optional parameters.

## Example

```git 
 ├── ModuleFolder
 │    └── components
 │    │   └── ModuleNameList.js
 │    │   └── ModuleNameShow.js
+│    └── locations.js
```

```js title=src/modules/ModuleFolder/locations.js
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
Location templates are used to pass location parameters and query values to `navigate` and `setLocation` [sagas](/docs/sagas).

For example...

```js
  const handleListWidgets = value => {
    dispatch(navigate(L.Widgets.list(null, query)))
  }
```

```js
  const handleShowWidget = value => {
    dispatch(navigate(L.Widgets.show({ id })))
  }
```
