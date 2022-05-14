---
sidebar_position: 6
title: Sagas
---

Since the router is saga-based, it makes sense to define sagas for router targets and api requests.

### navigate

`navigate` initiates a router request. It accepts `CLEAR` and `PUSH` params that determine whether the new location will replace the current location in the location stack, or added to the location stack.

It can be called from within a react component handler as...

```js
  const handleListWidgets = value => {
    dispatch(navigate(L.Widgets.list(null, query)))
  }
```

Or from within a saga as...

```js
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

### setLocation

`setLocation` stores the location in the `locationStack` current location. It accepts `CLEAR` and `PUSH` params that determine whether the new location will replace the current location stack, or be added to it. `setLocation` will ignore any router configured sagas. 

For more information on how to use `CLEAR` and `PUSH` props check [this doc](/docs/components)

```js
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



