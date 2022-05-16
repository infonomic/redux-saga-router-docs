---
sidebar_position: 1
title: Home
---

![Redux-Saga Router](/img/router.svg)
## Introduction

We didn't indent to build a router for React. There are lots of other great projects and approaches out there, including of course - [React Router](https://reactrouter.com/).

We started work on our router at a time when we were just getting up to speed with both React and Redux. [React Redux](https://react-redux.js.org/) isn't the only approach to state management, and it has it's own [pros and cons](https://itnext.io/life-after-redux-21f33b7f189e) - but overall it's a great tool and serves our current needs well.

Something that appeared very early in our React journey, was a desire to interact with our API, fetch data, send messages, perform any asynchronous tasks etc., as well as mutate our store as early as possible in the React component lifecycle - ideally before render, and well before [useEffect](https://reactjs.org/docs/hooks-effect.html). 

We discovered both [Redux Thunk](https://github.com/reduxjs/redux-thunk) and [Redux-Saga](https://redux-saga.js.org/) at about the same time, and while we could have used either, we settled on Redux-Saga as our 'side effect manager' with asynchronous tasks for what seemed like valid reasons then and now.

And so after all of the above, our router was born, with what I suppose is its defining feature - and that is the ability to configure routes with sagas that are called (via a Redux action) - *before* the components associated with those routes begin their 'lifecycle phases'.

We were also inspired by other frameworks, like Angular and [Vue.js](https://vuejs.org/), and so the core 'presentation' object for our router is the RouterView component, which behaves somewhat (but not exactly) like a Vue.js 'slot'.

The docs and code examples are far from perfect. And we don't feel confident enough yet to release any of this as a package. We've instead created an example project that includes the router module here at https://github.com/infonomic/redux-saga-router 

We'd be super grateful for feedback, thoughts, suggestions, and even pull requests! if you find any of this interesting or useful.

Happy routing!

-- The Infonomic Team
