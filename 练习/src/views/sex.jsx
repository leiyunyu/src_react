import React from 'react';
import * as router from 'react-router-dom';
import mapStateToProps from './sex/sex.js'
import mapDispatchToProps from './sex/action.js';
import HeaderSmall from '../components/Header/header_small.jsx';
import Dialoag from '../components/Dialoag/index.js';
import SingPick from '../components/Check/singPick.jsx';
import {connect} from 'react-redux';
let {NavLink, HashRouter, Route, BrowserRouter, Link } = router;
class Sex extends React.Component{
    constructor(){
        super();
        this.container = this.container.bind(this);
        this.callback = this.callback.bind(this);
        this.sentData = this.sentData.bind(this);
        this.state = {
            arr: [
                {
                    id: 0,
                    text: '我是男神',
                    class: 'radio checked'
                },
                {
                    id: 1,
                    text: '我是女神',
                    class: 'radio'
                }
            ]
        }
    }
    sentData(ind){
        this.props.updata_getsex(ind ==0 ? '男' : '女')
    }
    container(){
        this.refs.dialoag.show();
    }   
    callback(){
        let {history} = this.props;
        history.push({
            pathname: '/message/food'
        })
    }
    render(){
        return(
            <React.Fragment>
                <HeaderSmall>基本信息</HeaderSmall>
                <section className="page_section sec_section">
                        <ul>
                            <li>
                                <div className="sex_check">
                                    <SingPick callbacks={this.sentData}>
                                        {
                                            this.state.arr.map((item, index) => {
                                                return (<p key={index}><span>{item.text}</span><em>√</em></p>)
                                            })
                                        }
                                    </SingPick>
                                </div>
                                <img src="./src/img/2.jpg" />
                                <span className="contain_btn" onClick={this.container}><img src="./src/img/6.png" alt=""/></span>
                            </li>
                        </ul>
                <Dialoag ref="dialoag" callback={this.callback}></Dialoag>
                </section>
            </React.Fragment>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sex)