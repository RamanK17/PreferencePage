import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Layout from "./components/Layout"

import store from "./store"

// import { applyMiddleware, createStore } from "redux"

// import logger from "redux-logger"
// import thunk from "redux-thunk"
// import promise from "redux-promise-middleware"

// import reducer from "./reducers"

// const middleware = applyMiddleware(promise(), thunk, logger())
// const store= createStore(reducer, middleware)

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  <Layout />
</Provider>, app);
