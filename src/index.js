/**
 * The main entry point for the application.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = configureStore()
const token = localStorage.getItem('token');
/**
 * If the user is logged in, dispatch a login action.
 * @param token - the token to check for validity.
 */
if (token) {
  store.dispatch({ type: "LOGIN",
                  loggedIn: true, 
                  un: localStorage.getItem('user'),
                  ut: localStorage.getItem('userType') });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
