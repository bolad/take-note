import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//redux imports
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//this helps us see the redux state in the browser
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

//define action types for your actions which will be processed by the reducers
//and the reducers will return the states whic will inturn be given to the store

// create redux store -> reducers -> actions -> actionType | applyMiddleware()
// applyMiddleware will help us make ajax calls from the actions
const store = createStore(rootReducer, composeWithDevTools());

//provide the store to react
ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
