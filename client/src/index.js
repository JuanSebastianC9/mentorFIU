import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Firebase, { FirebaseContext } from './components/firebase';

const store = createStore(AllReducers);
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
  </FirebaseContext.Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
