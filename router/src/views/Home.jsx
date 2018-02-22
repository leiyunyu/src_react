import React from 'react';
import * as router from 'react-router-dom';
let { BrowserRouter, Redirect, Router, Route, Link, HashRouter } = router;
class Home extends React.Component{
    render(){
        let ls = localStorage;
        let idss = localStorage.getItem('ids');
        return idss ? <div>
        Hello Word!
        <p><Link to="/list/news2">新闻列表</Link></p>
    </div> : <Redirect to="detial/1" /> 
        ;
    }
}
export default Home;