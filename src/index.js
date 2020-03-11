import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//redux imports
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import middleware for asnychronous actions
import thunk from 'redux-thunk';
//this helps us see the redux state in the browser
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './routes/Header';

//define action types for your actions which will be processed by the reducers
//and the reducers will return the states whic will inturn be given to the store

// create redux store -> reducers -> actions -> actionType | applyMiddleware()
// applyMiddleware will help us make ajax calls from the actions
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//provide the store to react
ReactDOM.render (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={App} exact={true}/>
          <Route path="/login" component={Login} exact={true}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
