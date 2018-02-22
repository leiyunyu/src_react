import React from 'react';
import {connect} from 'react-redux';
import mapStateToProps from '../food/food.js'
import mapDispatchToProps from '../food/action.js';
import * as router from 'react-router-dom';
import MultiPick from '../../components/Check/multiPick.jsx'
import HeaderSmall from '../../components/Header/header_small.jsx';
let {NavLink, HashRouter, Route, BrowserRouter, Link } = router;
class Food extends React.Component{
    constructor(){
        super();
        this.state = {
            food: [
                {
                    id: 0,
                    name: '羊肉'
                },
                {
                    id: 1,
                    name: '西瓜'
                },
                {
                    id: 2,
                    name: '海鲜'
                },
                {
                    id: 3,
                    name: '洋葱'
                },
                {
                    id: 4,
                    name: '芹菜'
                },
                {
                    id: 5,
                    name: '芹菜'
                },
                {
                    id: 6,
                    name: '胡萝卜'
                },
                {
                    id: 7,
                    name: '胡萝卜'
                },
                {
                    id: 8,
                    name: '韭菜'
                },
                {
                    id: 9,
                    name: '香菜'
                }
            ],
        }
        this.callback = this.callback.bind(this);
    }
    callback(data){
        let arr = [];
        data.forEach(item => {
            arr.push(this.state.food[item].name)
        })
        this.props.updata_getfood(arr)
    }
    render(){
        return (
            <React.Fragment>
                <HeaderSmall>基本信息</HeaderSmall>
                <section className="page_section food_section">
                    <ul>
                        <li>
                            <div className="food_check">
                                <h3>不喜欢吃的食物</h3>
                                <div className="dislike">
                                    <MultiPick activeclass="active" callback={this.callback}>
                                        {
                                            this.state.food.map((item, index) => {
                                                return (<p key={index}><em>√</em><span>{item.name}</span></p>)
                                            })
                                        }
                                    </MultiPick>
                                </div>
                            </div>
                            <Link to="/message/allergy">
                                <img src="./src/img/8.jpg" />
                                <span className="contain_btn"><img src="./src/img/4.png" alt=""/></span>
                            </Link>
                        </li>
                    </ul>  
                </section>
            </React.Fragment>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Food);