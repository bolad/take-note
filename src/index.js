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
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';

//define action types for your actions which will be processed by the reducers
//and the reducers will return the states whic will inturn be given to the store

// create redux store -> reducers -> actions -> actionType | applyMiddleware()
// applyMiddleware will help us make ajax calls from the actions
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link className="navbar-brand" to="/">TAKE NOTE</Link>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/login">Login</Link> 
          </li>
        </ul>
      </div>
    </div>
  </nav>
);



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
