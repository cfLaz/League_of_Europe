import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import ReduxThunk from 'redux-thunk'; //to return a function that will dispatch an action, in this way we can run asyncronous code
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';

import newLeagueR from './store/reducers/newLeagueR';
import AuthR from './store/reducers/AuthR';
import leaguesR from './store/reducers/LeaguesR';

import {watchUpdates, watchAuth} from './store/sagas/indexSaga'

/* const composeEnhancers = process.env.REACT_APP_NODE_ENVX === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose; */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  newLeague: newLeagueR,
  auth: AuthR,
  leagues: leaguesR, //has to match import (case sensitive)
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk, sagaMiddleware))
  );

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchUpdates);

const app = (
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
