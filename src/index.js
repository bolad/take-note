import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//redux imports
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//this helps us see the redux state in the browser
import { composeWithDevTools } from 'redux-devtools-extension';

// create redux store -> reducers -> actions | applyMiddleware()
// applyMiddleware will help us make ajax calls from the actions
const store = createStore(composeWithDevTools());


ReactDOM.render (<App />, document.querySelector('#root'))
