import React from 'react';
import * as router from 'react-router-dom';
import HeaderSmall from '../components/Header/header_small.jsx';
import Sex from './sex.jsx'
let {NavLink, HashRouter, Route, BrowserRouter, Link } = router;
class FirstPage extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <React.Fragment>
                <HeaderSmall>小鲜测评</HeaderSmall>
                <section className="page_section">
                        <ul>
                            <li>
                                <Link to="/sex">
                                    <img src="./src/img/1.jpg" />
                                    <span className="start_btn"><img src="./src/img/3.png" alt=""/></span>
                                </Link>
                            </li>
                        </ul>
                </section>
            </React.Fragment>
        )
    }
}
export default FirstPage;