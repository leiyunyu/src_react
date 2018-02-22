import {createStore, combineReducers} from 'redux';
// 创建数据容器
// let reducer = combineReducers({
//     count,
//     list,
//     change,
//     person
// })
let store = createStore(reducer, {
    count: 9,
    list: [],
    change: '',
    person: {
        name: 'zhangsan',
        hobby: 'basketball'
    }
});
// reducer是一个纯函数，接收两个参数（state, actions）
// state: 管理的每一条数据
// actions 动作（操作state）
function reducer(state, actions){
    return {
        count: count(state.count, actions),
        list: list(state.list, actions),
        change: change(state.change, actions),
        person: person(state.person, actions)
    }
}
function count(state, actions){
    if(actions.type === 'increment'){
        return state + actions.step
    } else if(actions.type === 'decrement'){
        return state - actions.step
    } else{
        return state
    }
}
function list(state = [], actions){
    if(actions.type === 'add_list'){
        return [...state, actions.data]
    }else{
        return state
    }
}
function change(state = '', actions){
    if(actions.type === 'change_data'){
        return state + actions.data
    } else{
        return state
    }
}
function person(state, actions){
    return {
        name: name(state.name, actions),
        hobby: hobby(state.hobby, actions)
    }
}
function name(state = '', actions){
    return state
}
function hobby(state = '', actions){
    return state
}
// 监听器： 每一次数据容器的值得变化都会触发subscribe
store.subscribe(() => {
    console.log(store.getState())
    container.innerHTML = store.getState().count + store.getState().change
    let {list} = store.getState();
    list = list.map((item) => {
        return `<li>${item}</li>`
    })
    olList.innerHTML = list.join('')
})
// 操作视图，触发action
let container = document.getElementsByTagName('h1')[0];
let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let text = document.querySelector('.text');
let addlist = document.querySelector('.addlist');
let olList = document.querySelector('.olList');
let changeBtn = document.querySelector('.change');

function actionCreater(type){
    return {
        type: type,
        step: 2
    }
}
increment.onclick = function(){
    store.dispatch(actionCreater('increment'));
}
decrement.onclick = function(){
    store.dispatch(actionCreater('decrement'));
}
addlist.onclick = function(){
    if(!text.value) reutrn;
    store.dispatch({
        type: 'add_list',
        data: text.value
    })
}
changeBtn.onclick = function(){
    store.dispatch({
        type: 'change_data',
        data: text.value
    })
}