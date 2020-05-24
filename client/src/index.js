import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Firebase, { FirebaseContext } from './components/firebase';
import allReducers from './redux/reducer/reducer';

const store = createStore(allReducers);
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
      <App />
  </Provider>
  </FirebaseContext.Provider>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
