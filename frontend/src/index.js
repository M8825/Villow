import React from 'react';
import './index.css';
import App from './App';
import configureStore from './store';
import { restoreSession } from './store/csrf';
import { createUser, loginUser, logoutUser } from './store/usersReducer.js';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root =createRoot(domNode);


let currentUser;

if (sessionStorage.getItem('currentUser') !== "undefined") {
  currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
}

let initialState = {};
if (currentUser) {
  initialState = {
    user: currentUser
  };
};

const store = configureStore(initialState);

window.createUser = createUser
window.loginUser = loginUser
window.logoutUser = logoutUser

const InitializeApp = () => {
  return (
      <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
      </React.StrictMode>
  );
}

root.render(
  <React.StrictMode>
    <InitializeApp />
  </React.StrictMode>,
);

restoreSession().then(InitializeApp)
