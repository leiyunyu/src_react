import React from 'react';
import * as router from 'react-router-dom';
import HeaderSmall from '../components/Header/header_small.jsx';
let {NavLink, HashRouter, Route, BrowserRouter, Link } = router;
class Result extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <React.Fragment>
                <HeaderSmall>平和质</HeaderSmall>
                <section className="result_section">
                     <div className="top">
                         <p>您的体质为：</p>
                         <h2>平和质 偏阴性</h2>
                         <p>阴阳气血调和，以体态适中，面色红润，精力充沛等为主要特征</p>
                         <span>＞</span>
                     </div>
                     <ul>
                         <li>宜食<span>＞</span></li>
                         <li>不宜食<span>＞</span></li>
                     </ul>
                </section>
            </React.Fragment>
        )
    }
}
export default Result;