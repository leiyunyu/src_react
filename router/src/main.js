import React from 'react';
import ReactDOM from 'react-dom';
import * as router from 'react-router-dom';
import './css/style.css';
let { BrowserRouter, Router, Route, Link, NavLink, HashRouter } = router;
console.log(router);
import Home from './views/home.jsx';
import List from './views/list.jsx';
import Detial from './views/detial.jsx';
if(NODE.ENV === 'development'){
    console.log('处于开发阶段');
} else{
    console.log('处于打包阶段');
}
ReactDOM.render(
    <HashRouter>
        <div>
            <ul>
                <li><NavLink to="/home" activeClassName="active">首页</NavLink></li>
                <li><NavLink to="/list" activeClassName="active">列表页</NavLink></li>
                <li><NavLink to="/detial/1" activeClassName="active">详情页</NavLink></li>
            </ul>
            <ul>
                <Route path="/home" component={Home}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/detial/:id" component={Detial}></Route>
            </ul>
        </div>
    </HashRouter>,
    document.getElementById('root')
);