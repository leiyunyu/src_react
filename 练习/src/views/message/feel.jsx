import React from 'react';
import 'isomorphic-fetch';
import * as router from 'react-router-dom';
import SingPick from '../../components/Check/singPick.jsx';
import HeaderSmall from '../../components/Header/header_small.jsx';
let {NavLink, HashRouter, Route, BrowserRouter, Link } = router;
class Feel extends React.Component{
    constructor(){
        super();
        this.state = {
            title: [],
            span: []
        }
        this.submits = this.submits.bind(this);
    }
    componentDidMount(){
        fetch('./src/data/feel.json').then(res => res.json()).then(res => {
            this.setState({
                title: res[0].title,
                span: res[0].span
            })
        })
    }
    submits(){
        console.log(this.props)
        let { history } = this.props;
        history.push({
            pathname: '/result'
        })
    }
    render(){
        return (
            <React.Fragment>
                <HeaderSmall>您感觉？</HeaderSmall>
                <section className="page_section feel_section">
                <ul>
                    <li>
                        <ul className="feel">
                            {this.state.title.map((item, index) => {
                                return (<li key={index}>
                                    <h4>· {item}</h4>
                                    <h6>
                                        <SingPick>
                                            {
                                                this.state.span.map((item, index) => {
                                                    return (<p key={index}><span>{item.name}</span></p>)
                                                })
                                            }
                                        </SingPick>
                                    </h6>
                                </li>)
                                })}
                        </ul>
                        <img src="./src/img/5.png" alt=""/>
                        <span className="contain_btn" onClick={this.submits}><img src="./src/img/9.png" alt=""/></span>
                    </li>
                </ul>  
                </section>
            </React.Fragment>
        )
    }
}
export default Feel;