import {createStore} from 'redux';
import reducers from './reducer.js';
let store = createStore(reducers);
store.subscribe(function(){
    console.log(store.getState())
})
export default store;