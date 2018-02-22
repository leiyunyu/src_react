import React from 'react';
import {createStore, combineReducers} from 'redux';
import reducer from './reducer';
let store = createStore(reducer);
store.subscribe(function(){
    console.log(store.getState());
})
export default store;