---
sidebar_position: 5
---

# Dispatch

Dispatch from components

For more information on route params check [locations](/docs/locations/) and [routes](/docs/routes/) sections

```
const fn = () => {
  dispatch(navigate(L.LocationModuleName.locationName()))
}

// Navigate with route param
const fn2 = () => {
  dispatch(navigate(L.LocationModuleName.locationName({ id })))
}

```

`navigate` can accept `mode` constants `CLEAR` and `PUSH` to manipulate with `locationsStack` variable

For more information on query params `CLEAR` and `PUSH` check [this doc](/docs/components)

For more information on `locationStack` variable check [this doc](/docs/sagas/#setlocation)

```
const fn3 = () => {
  dispatch(navigate(L.LocationModuleName.locationName(), CLEAR))
}

const fn4 = () => {
  dispatch(navigate(L.LocationModuleName.locationName(), PUSH))
}

```

Also you can dispatch `navigate` with any kind of configuration objects. For example pagination configuration object

```
const location = useCurrentLocation()

const params = null

const pagination = useMemo(() => {
  return {
    page: 1, pageSize: 10, sortBy: 'created_at', sortDesc: true, search: '', ...location.query,
  }
}, [location.query])

const setPage = query => {
  dispatch(navigate(L.LocationModuleName.locationName(params, query)))
}

const handleChangePage = (event, newPage) => {
  setPage({ ...pagination, page: newPage + 1 })
}

```



