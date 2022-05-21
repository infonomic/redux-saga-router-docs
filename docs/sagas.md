---
sidebar_position: 5
title: Sagas
---

The router is saga-based, and relies on two sagas and a reducer.

The process of navigating to a new route involves both running an optionally configured saga (present on the [route](/docs/routes) configuration object), and then optionally updating the currentLocation and locationStack state in the store. Critically, the configured saga (if present) must run before the store is updated, and must have the ability to decide to cancel the navigation, or redirect etc. 

We must also never allow one navigation to start before another has ended.  That behavior is built-in to the redux-saga 'takeLeading' watcher, which requires that we start the saga by dispatching an action, not calling it directly.

So we need one action and router saga to tell redux-saga to look for - and if found, run a router-configured saga, and then if that saga chooses to - a second action to actually update router state.

## navigate

`navigate` is a redux action (defined in `redux/actions.js`. It's actually an 'action helper'). There is just one saga listening for this action - `handleNavigation` - which checks for a configured saga on the route - and if found, will `call` it. It accepts `CLEAR` and `PUSH` params that determine whether the new location will replace the current location in the location stack, or is added to the location stack. Note that if a configured saga is found and called, it will be up to that saga to complete the route change by optionally calling `setLocation` (see below), thereby updating the state of the location stack and `window.history`.

`navigate` accepts a [location template](/docs/locations) (with options) as an argument, and can be called from within a react component handler as...

```js
  const handleListWidgets = value => {
    dispatch(navigate(L.Widgets.list(null, query)))
  }
```

Or from within a saga as...

```js
* destroy({ payload: { id, data } }) {
    yield put(mutations.destroyStarted())
    try {
      yield call(apiRequest, { method: 'delete', url: `/backend-endpoint/${id}` })
      yield put(mutations.destroySucceeded({ id }))
      yield put(navigate(L.LocationModuleName.locationName()))
    } catch (error) {
      // Error handling
    }
  },
```

Location parameters or query values are passed to the location template for locations (routes) that accept dynamic parameters. For example...

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

## setLocation

`setLocation` is a redux action (defined in `redux/actions.js`. It's actually an action helper). There is both a saga - `updateLocation`, and a reducer that will respond to this action. The saga will update the current `window.history` with the requested route path, and the reducer will update the location stack state, deciding whether to replace or push the location onto the current location stack based on the `CLEAR` and `PUSH` params. `setLocation` will ignore any router configured sagas (see `navigate` above). 

Most importantly, once `setLocation` has been dispatched and router state updated, the `RouterView` component will re-render - including any configured React components defined in the router configuration object - which is of course the ultimate goal of the route change. 

For more information on how to use `CLEAR` and `PUSH` props check [this doc](/docs/components)

```js
* fetchList({ payload: { to, mode } }) {
  const { query: params } = to
  yield put(mutations.listStarted())
  try {
    const response = yield call(apiRequest, {
      method: 'get',
      url: '/backend-endpoint',
      params,
    })
     yield put(mutations.listSucceeded(response))
     yield put(setLocation(to, mode))
  } catch (error) {
    // Error handling
  }
},
```



