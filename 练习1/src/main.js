import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import Todolist from './app.jsx';
import './css/style.css'
import store from './store/store.js'
ReactDOM.render(
  <Provider store={store}>
      <Todolist/>
  </Provider>,
  document.getElementById('root')
);


