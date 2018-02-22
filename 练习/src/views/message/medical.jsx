import React from 'react';
import * as router from 'react-router-dom';
import HeaderSmall from '../../components/Header/header_small.jsx';
import SingPick from '../../components/Check/singPick.jsx';
import MultiPick from '../../components/Check/multiPick.jsx'
let {NavLink, HashRouter, Route, BrowserRouter, Link } = router;
class Medical extends React.Component{
    constructor(){
        super();
        this.state = {
            // food: ['心脏病', '冠心病', '肺癌', '心脏病', '心脏病', '肺癌', '肺癌', '肺癌'],
            food: [
                {
                    id: 0,
                    name: '心脏病'
                },
                {
                    id: 1,
                    name: '冠心病'
                },
                {
                    id: 2,
                    name: '肺癌'
                },
                {
                    id: 3,
                    name: '心脏病'
                },
                {
                    id: 4,
                    name: '心脏病'
                },
                {
                    id: 5,
                    name: '肺癌'
                },
                {
                    id: 6,
                    name: '肺癌'
                },
                {
                    id: 7,
                    name: '肺癌'
                }
            ],
            arr: [
                {
                    id: 0,
                    text: '无',
                    class: 'radio checked'
                },
                {
                    id: 1,
                    text: '有',
                    class: 'radio'
                }
            ]
        }
    }
    render(){
        return (
            <React.Fragment>
                <HeaderSmall>基本信息</HeaderSmall>
                <section className="page_section allergy_section">
                    <ul>
                        <li>
                        <div className="allergy_check">
                            <h3>有无病史</h3>
                            <div className="allergy">
                                <SingPick>
                                {
                                    this.state.arr.map((item, index) => {
                                        return (<p key={index}><span>{item.text}</span><em>√</em></p>)
                                    })
                                }
                            </SingPick>
                            </div>
                            <ul className="allergy_food">
                                <MultiPick activeclass="active">
                                    {
                                        this.state.food.map((item, index) => {
                                            return (<li key={index}><span>{item.name}</span></li>)
                                        })
                                    }
                                </MultiPick>
                            </ul>
                        </div>
                            <Link to="/message/feel">
                                <img src="./src/img/8.jpg" />
                                <span className="contain_btn"><img src="./src/img/6.png" alt=""/></span>
                            </Link>
                        </li>
                    </ul>  
                </section>
            </React.Fragment>
        )
    }
}
export default Medical;