---
sidebar_position: 6
title: Hooks
---

The router library has a suite of convenience hooks, listed below.

[draft: more examples]

### useCurrentLocation
```js
const location = useCurrentLocation()
```

### useLocationStack
```js
const locationStack = useLocationStack()
```

### useParams

This hook is used to get dynamic params from url

```js
const { param1, param2 } = useParams()
```

### useCurrentRoute
```js
const currentRoute = useCurrentRoute()
```
### useBreadcrumbs
For more information on how to implement ```useBreadcrumbs()``` check [this doc](/components.md/#breadcrumbs)

```js
const breadcrumbs = useBreadcrumbs()
```

### useIsActive
For more information on ```to``` and ```exact``` props check [this doc](/components.md/)

```js
const isActive = useIsActive(to, exact) 
```





