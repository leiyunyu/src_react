import React from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-fetch';
import * as router from 'react-router-dom';
import './css/style.css';
import './iconfont/iconfont.css'
import Login from './views/login.jsx';
import Register from './views/register.jsx';
let {NavLink, HashRouter, Route, BrowserRouter, Switch, Link, Redirect } = router;
if(NODE.ENV === 'development'){
    console.log('处于开发阶段');
} else{
    console.log('处于打包阶段');
}
import Wrapper from './views/home/home.jsx';
ReactDOM.render(
        <HashRouter><div className="big">
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/home" component={Wrapper}></Route>
            <Route path='/' exact render={() => <Redirect to='/home/pages' />}></Route>
        </div></HashRouter>,
    document.getElementById('root')
);