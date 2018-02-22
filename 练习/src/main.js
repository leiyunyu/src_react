import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import * as router from 'react-router-dom';
import './css/style.css';
import {Provider} from 'react-redux';
import store from './store/store.js';
let {NavLink, HashRouter, Route, BrowserRouter, Switch, Link, Redirect } = router;
if(NODE.ENV === 'development'){
    console.log('处于开发阶段');
} else{
    console.log('处于打包阶段');
}
import Header from './components/Header/header.jsx';
import routerConfig from './router/router.js';
import 'isomorphic-fetch';
ReactDOM.render(
    <HashRouter>
        <React.Fragment>
            <Header></Header>
                <Provider store={store}>
            <section className="section">
                    <Route path='/' exact render={() => <Redirect to='/first_page' />}></Route>
                    {routerConfig.routes.map((item, index) => {
                        return (
                            <Route path={item.path} component={item.component} key={index}></Route>
                        )
                    })}
            </section>
                </Provider>
        </React.Fragment>
    </HashRouter>,
    document.getElementById('root')
);
