---
sidebar_position: 6
---

# Hooks

Available hooks


### useCurrentLocation
```
const location = useCurrentLocation()
```

### useLocationStack
```
const locationStack = useLocationStack()
```

### useParams

This hook is used to get dynamic params from url

```
const { param1, param2 } = useParams()
```

### useCurrentRoute
```
const currentRoute = useCurrentRoute()
```


### useBreadcrumbs
For more information on how to implement `useBreadcrumbs()` check [this doc](/components.md/#breadcrumbs)

```
const breadcrumbs = useBreadcrumbs()
```

### useIsActive
For more information on `to` and `exact` props check [this doc](/components.md/)

```
const isActive = useIsActive(to, exact) 
```





