import {combineReducers} from 'redux';
import {ADD, TOGGOLESTATUS, CLEAR, FILTER, DELETE} from './actions.js';
function todolist(state=[], actions){
    switch(actions.type){
        case ADD: 
            return [...state, actions.data];
            break;
        case TOGGOLESTATUS: 
            return [...state].map((item, index) => {
                if(item.data === actions.data.target){
                    item.status=actions.data.newStatus
                }
                return item
            })
            break;
        case CLEAR:
            return [...state].filter((item) => {
                if(item.status !== 'finished'){
                    return item
                }
            })
            break;
        case DELETE:
            return [...state].filter(item => {
                if(item.data !== actions.data){
                    return item
                }
            })
            break;
        default: return [...state]
    }
}
function filter(state = 'all', actions){
    if(actions.type ==FILTER){
        return actions.text
    }else{
        return state
    }
}
export default combineReducers({
    todolist,
    filter
})