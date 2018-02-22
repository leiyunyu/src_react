import React from 'react';
import * as router from 'react-router-dom';
import HeaderSmall from '../../components/Header/header_small.jsx';
let {NavLink, HashRouter, Route, BrowserRouter, Link } = router;
import routerConfig from '../../router/router.js'
class Message extends React.Component{
    render(){
        return (<section className="section">
            <Route path='/' exact render={() => <Redirect to='/message/food' />}></Route>
            {routerConfig.routes[2].children.map((item, index) => {
                return (
                    <Route path={item.path} component={item.component} key={index}></Route>
                )
            })}
        </section>)
    }
}
export default Message;