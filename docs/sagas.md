---
sidebar_position: 4
---

# Sagas

Since the router is saga-based, it makes sense to define sagas for router targets and api requests.

The router provides two ways of navigation. You can use `setLocation` or `navigate`


### setLocation

`setLocation` stores the location in the `locationStack` current location. It accepts `CLEAR` and `PUSH` params that determine whether the new location will replace the current location stack, or be added to it. `setLocation` will ignore any router configured sagas. 

For more information on how to use `CLEAR` and `PUSH` props check [this doc](/docs/components)

```
* fetchList({ payload: { to, mode } }) {
  const { query: params } = to

  yield put(mutations.setLoading())
  yield put(setLocation(to, mode))

  try {
    const response = yield call(apiRequest, {
      method: 'get',
      url: '/backend-endpoint',
      params,
    })
    yield put(mutations.mutation(response))
  } catch (error) {
    // Error handling
  }
},
```

### navigate

`navigate` is identical to `setLocation` above, but will also  call and router configured sagas.

```
* destroy({ payload: { id, data } }) {
    yield put(mutations.setLoading())
    try {
      yield call(apiRequest, { method: 'delete', url: `/backend-endpoint/${id}` })
      yield put(mutations.mutation({ id }))
      yield put(navigate(L.LocationModuleName.locationName()))
    } catch (error) {
      // Error handling
    }
  },
```



