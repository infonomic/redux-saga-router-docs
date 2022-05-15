---
sidebar_position: 6
title: Sagas
---

Since the router is saga-based, it makes sense to define sagas for router targets and api requests.

### navigate

`navigate` is a redux action (defined in `redux/actions.js`). There is a saga that will respond to this action - `handleNavigation` - which checks for a configured saga on the route - and if found, will `call` it. It accepts `CLEAR` and `PUSH` params that determine whether the new location will replace the current location in the location stack, or is added to the location stack. Note that if a configured saga is found and called, it will be up to the saga to complete the route change by calling `setLocation` (see below), thereby updating `window.history` and the location stack.

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

`setLocation` is a redux action (defined in `redux/actions.js`). There is both a saga - `updateLocation`, and a reducer that will respond to this action. The saga will update the current `window.history` with requested route path, and the reducer will decide whether to replace or push the location onto the current location stack based on the `CLEAR` and `PUSH` params. `setLocation` will ignore any router configured sagas. 

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



