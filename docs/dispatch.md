---
sidebar_position: 5
---

# Dispatch

Dispatch from components

For more information on query params `CLEAR` and `PUSH` check [this doc](/docs/components)

For more information on route params check [locations](/docs/locations/) and [routes](/docs/routes/) sections

```
const fn = () => {
  dispatch(navigate(L.LocationModuleName.locationName()))
}

// Navigate with query param
const fn2 = () => {
  dispatch(navigate(L.LocationModuleName.locationName(), PUSH))
}

// Navigate with query param and route param
const fn3 = () => {
  dispatch(navigate(L.LocationModuleName.locationName({ id }), CLEAR))
}

```



