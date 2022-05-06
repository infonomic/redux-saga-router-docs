---
sidebar_position: 1
title: Introduction
---
## Conceptual Overview

![Router Overview](/img/saga-redux-router-overview.svg)

## Getting Started with Example

<!-- ### Initialization -->
<!-- Before we started, you might need install [yarn](https://github.com/yarnpkg/yarn/) and create a react app. Shown in the snipped below. -->
First, install [yarn](https://github.com/yarnpkg/yarn/) and create a react app.
```
$ npx create-react-app [project-name]
```
### Install required dependencies
After creating your project, uses command cd to go inside the directory and install dependencies then yarn start
```bash
$ cd [project-name]
$ yarn add redux react-redux redux-saga reselect immer lodash
$ yarn start
```

Open a browser [http://localhost:3000/](http://localhost:3000/). 
It will render React Logo and display a message "Edit <code>src/App.js</code> and save to reload." the page.

<!-- ### Install required dependencies
Utilize the command below to install dependencies
```bash
$ yarn add redux react-redux redux-saga reselect immer lodash
``` -->
### Import Infonomic's Redux-saga Router
Download and place the **Infonomic's Redux-saga Router** folder to `src/lib`.
```git
 ├── README.md
 ├── package.json
 ├── public
 │   ├── favicon.ico
 │   └── index.html
 ├── src
 │   ├── App.css
 │   ├── App.js
 │   ├── App.test.js
 │   ├── index.css
 │   ├── index.js
 │   ├── logo.svg
+│   └── lib
+│       └── redux-saga-router
 └── yarn.lock
```

### Create Root Reducer with router

Create a rootReducer.js at `src/store/rootReducer.js` and import `createRouterReducer` from `../lib/redux-saga-router`
After importing createRouterReducer file, write the rootReducer and export the root reducer.

```js title="src/store/rootReducer.js"
import { combineReducers } from 'redux'
import { createRouterReducer } from '../lib/redux-saga-router'

const rootReducer = combineReducers({
    router: createRouterReducer(),
})

export default rootReducer
```
### Create Location template with example page components

Add location template file by creating a location.js `src/modules/home/location.js`
```js title="src/modules/home/location.js"
import { createLocationTemplate } from '../../lib/redux-saga-router'

export default {
  home: createLocationTemplate({
    name: 'home',
    path: '/',
  }),
}
```
And HomePage component `src/modules/home/components/HomePage.js`
```jsx title="src/modules/home/components/HomePage.js"
import React from 'react'

const Hompage = () => (
    <div>
        <h1>Home Page</h1>
    </div>
)

export default Hompage
```

You also can create multiple templates. For instance, we will have two location templates files HomePage.js and NewsPage.js
```js title="src/modules/news/location.js"
import { createLocationTemplate } from '../../lib/redux-saga-router'

export default {
  news: createLocationTemplate({
    name: 'news',
    path: '/news',
  }),
}
```

```jsx title="src/modules/news/components/NewsPage.js"
import React from 'react'

const NewsPage = () => (
    <div>
        <h1>News Page</h1>
    </div>
)

export default NewsPage
```

Create a route template file for HomePage at `src/modules/home/route.js`
```js title="src/modules/home/route.js"
import * as L from '../../locationTemplates'
import HomePage from './components/HomePage'

export default [
  {
    template: L.Home.home,
    title: 'Home',
    requiresAuth: false, // Access option
    components: {
      main: HomePage,
    },
  },
]
```
Create a route template file for NewsPage at `src/modules/news/route.js`
```js title="src/modules/news/route.js"
import * as L from '../../locationTemplates'
import NewsPage from './components/NewsPage'

export default [
  {
    template: L.News.news,
    title: 'News',
    requiresAuth: false, // Access option
    components: {
      main: NewsPage,
    },
  },
]
```
:::tip Note 
Location template including paths and parameters are defined separately from routes. <br/>
For more information on `location.js` file check this [doc](/docs/locations).
:::

Group Location template up by creating a locationTemplates.js file at `src/locationTemplates.js`
```js
import Home from './modules/home/location'

export { default as Home } from './modules/home/location'
export { default as News } from './modules/news/location'

export const defaultLocation = Home.home()
```

### Create Routes file
create a routes.js file at `src/routes.js` by using `prepareRoutes`
```jsx title="src/routes.js"
import { prepareRoutes } from './lib/redux-saga-router'

import homeRoutes from './modules/home/route'
import newsRoutes from './modules/news/route'

export default prepareRoutes([...homeRoutes, ...newsRoutes])

```

### Create Main Layout

Create a main layout file at `src/ui/MainLayout.js` by using `RouterView` from `redux-saga-router`
```jsx title="src/ui/MainLayout.js"
import { CLEAR, RouterLink, RouterView } from '../lib/redux-saga-router'
import * as L from '../locationTemplates'

function MainLayout() {
    return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: '100vh'
                }}
            >
                <RouterView name="main" />
                <div
                    style={{
                        display: 'flex',
                        gap: '10px',
                    }}
                >
                    <RouterLink to={L.Home.home()} mode={CLEAR} exact>
                        Home
                    </RouterLink>
                    <RouterLink to={L.News.news()} mode={CLEAR} exact>
                        News
                    </RouterLink>
                </div>
            </div>
    )
}

export default MainLayout
```

:::tip Note 
For more information on `RouterLink` file check this [Link](/docs/components#links).
:::


After completed creating all necessary files, add routes into the rootReducer.js
```git title="src/store/rootReducer.js"
  import { combineReducers } from 'redux'
  import { createRouterReducer } from '../lib/redux-saga-router'
+ import { defaultLocation } from '../locationTemplates'
  
  const rootReducer = combineReducers({
-     router: createRouterReducer(),
+     router: createRouterReducer(defaultLocation),
  })
  
  export default rootReducer
```


### Creates Redux Store and Redux Saga Middleware
Create index.js file at `src/store/configureStore.js` <br/>
import the followings<br/>


```js title="src/store/configureStore.js"
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            sagaMiddleware
        )
    )

    store.runSaga = sagaMiddleware.run
    return store
}
```

### Create Root Saga
Create a rootSaga file at `src/store/rootSaga.js`

```js
import { all, call, fork } from 'redux-saga/effects'

import { watchers as routerWatchers, initializeRouteSaga } from '../lib/redux-saga-router'

export default (routes) =>
    function* rootSaga() {
        yield fork(routerWatchers, routes)
        yield call(initializeRouteSaga, routes, undefined)
    }

```

### Adding provider the Redux Store to React
After store and saga is created, add `<Provider>` around the application in `src/index.js` and pass store as a prop.

```git title="src/index.js"
  import React from 'react'
  import ReactDOM from 'react-dom/client'
+ import { Provider } from 'react-redux'
  
  import './index.css'
  import App from './App'
  import reportWebVitals from './reportWebVitals'
+ import configureStore from './store/configureStore'
+ import rootSaga from './store/rootSaga'
+ import routes from './routes'
  
  const root = ReactDOM.createRoot(document.getElementById('root'))
+ const store = configureStore()
+ store.runSaga(rootSaga(routes))

  root.render(
    <React.StrictMode>
+     <Provider store={store}>
        <App />
+     </Provider>
    </React.StrictMode>
  )
```
### Editing App.js
Replace the entire code in `App.js` with the snippet below. 
<!-- Edit `src/App.js` and add `routes`, `<RouterView />` to the application. -->
```jsx title="src/App.js"
import { Router, RouterView } from './lib/redux-saga-router'
import routes from './routes'
import MainLayout from './ui/MainLayout'

function App() {
    return (
        <Router routes={routes}>
            <RouterView name="layout" defaultComponent={MainLayout} />
        </Router>
    )
}

export default App
```

### Result

![Result](/img/result.gif)