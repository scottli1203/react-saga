import "babel-polyfill"
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/AppContainer'
import configureStore from './stores/configureStore'
import rootSaga from './sagas'

const store = configureStore()
store.runSaga(rootSaga)

let root = document.createElement('div');
document.body.appendChild(root);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)

console.log('first commit');
console.log('first commit2');
//https://github.com/zhoulijie/react-redux-support-ie8/tree/master/src