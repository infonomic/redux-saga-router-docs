---
sidebar_position: 4
---

# Sagas

Configure sagas

Call router setLocation and navigate from a saga

```
export const sagas = {
  * fetchList({ payload: { to, mode } }) {
    const { query: params } = to

    yield put(mutations.setLoading())
    yield put(setLocation(to, mode))

    try {
      const response = yield call(apiRequest, {
        method: 'get',
        url: '/backend-endpioint',
        params,
      })
      yield put(mutations.setList(response))
    } catch (error) {
      const { messages } = processError(error, null, {
        ERR_FORBIDDEN: "You don't have permission to view this list",
      })
      yield put(addMessage(messages.map(message => ({ type: 'error', message, immediate: true }))))
      yield put(mutations.setError())
    }
  },
}
```



