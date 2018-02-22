import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ADD, TOGGOLESTATUS, CLEAR, FILTER, DELETE} from './store/actions.js';
class Todolist extends Component{
    constructor(){
        super();
        this.state = {
            value: '',
            filter_name:''
        }
        this.add = this.add.bind(this);
        this.input = this.input.bind(this);     
        this.filter = this.filter.bind(this);        
    }
    add(e){
        if(e.keyCode !==13)return;
        this.props.add(this.state.value)
        this.setState({
            value: ''
        })
    }
    input(e){
        this.setState({
            value: e.target.value
        })
    }
    toggoleStatus(item){
        this.props.updataStatus({
            target: item.data,
            newStatus : item.status == 'pending' ? 'finished' : 'pending'
        })
    }
    filter(v){
        this.props.filter(v);
        this.setState({
            filter_name: v
        })
    }
    render(){
        let {value, filter_name} = this.state;
        let {todolist, filter, clear, length, deletes} = this.props;
        return (<div className="todolist">
                <p><input value={value} onInput={this.input} type="text" onKeyDown={this.add}/></p>
                <ul className="todo_list">
                    {todolist.map((item,index) => {
                        return (
                    <li key={item.data} className={item.status !== 'pending' ? 'checked todo_item' : 'todo_item'}><span className="checkbox" onClick={() => {this.toggoleStatus(item)}}></span><span>{item.data}</span><span className="delete" onClick={() => {deletes(item.data)}}>X</span></li>
                    )})}
                </ul>
                <p>
                    <button>{length}项未完成</button>
                    <button className={filter_name=='all'?'selected':''} onClick={() => {this.filter('all')}}>全部</button>
                    <button className={filter_name=='pending'?'selected':''} onClick={() => {this.filter('pending')}}>正在做</button>
                    <button className={filter_name=='finished'?'selected':''} onClick={() => {this.filter('finished')}}>已完成</button>
                    <button onClick={clear}>清除已完成</button>
                </p>
            </div>)
    }
}
function filter_list(todolist, filter){
    if(filter == 'all') return todolist;
    let arr = [];
    todolist.forEach(item => {
        if(item.status == filter){
            arr.push(item);
        }
    })
    return arr;
}
function get_pending(todolist){
    let len=0;
    todolist.forEach(item => {
        if(item.status == 'pending'){
            ++len
        }
    })
    return len
}
function mapStateToProps(state){
    return {
        todolist: filter_list(state.todolist, state.filter),
        length:get_pending(state.todolist)
    }
}
function mapDispatchToProps(dispatch){
    return {
        add: function(data){
            dispatch({
                type: ADD,
                data: {
                    data: data,
                    status: 'pending'
                }
            })
        },
        updataStatus: function(obj){
            dispatch({
                type: TOGGOLESTATUS,
                data: obj
            })
        },
        filter: function(type){
            dispatch({
                type: FILTER,
                text: type
            })
        },
        clear(){
            dispatch({
                type: CLEAR
            })
        },
        deletes(data){
            dispatch({
                type: DELETE,
                data: data
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);