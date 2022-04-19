---
sidebar_position: 4
---

# Sagas

Configure sagas

Call router setLocation and navigate from a saga

Our router provides two ways of navigation. You can use ```setLocation``` or ```navigate```


### setLocation

```setLocation``` keep history of locations in ```locationStack``` variable that can be manipulated throw ```CLEAR``` and ```PUSH``` params provided as params to navigation component. But it will not run any saga on view mount. 

For more information on how to use```CLEAR``` and ```PUSH``` props check [this doc](/docs/components)

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

```navigate``` is used when you need to run init saga on component mount.

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



