import {combineReducers} from 'redux';
function sex(state=0, action) {
    if(action.type =='updata_getsex'){
        state = action.data
    }
    return state
}
function food(state=[], action) {
    if(action.type =='updata_getfood'){
        state = [...action.data]
    }
    return state
}
function count2(state=0, action) {
    return state
}
function count3(state=0, action) {
    return state
}
let reducer = combineReducers({
    sex,
    food,
    count2,
    count3
})
export default reducer;