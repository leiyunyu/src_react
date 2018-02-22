import React, {Component} from 'react';
import Listsmall from '../../components/List/list.jsx';
class Zhanghu extends Component{
    constructor(){
        super();
        this.go_to_login = this.go_to_login.bind(this);
        this.go_to_register = this.go_to_register.bind(this);
    }
    go_to_login(){
        let {history} = this.props;
        history.push({
            pathname: '/login'
        })
    }
    go_to_register(){
        let {history} = this.props;
        history.push({
            pathname: '/register'
        })
    }
    render(){
        return (<div className="zhanghu">
            <div className="top">
                <img src="src/static/img/p6.jpg" alt=""/>
                <p><button onClick={this.go_to_login}>登录</button><button onClick={this.go_to_register}>注册</button></p>
            </div>
            <Listsmall></Listsmall>
            <ul className="uls">
                <li><i className="iconfont icon-woyaotouzi"></i>我的投资<span>0.00 ></span></li>
                <li><i className="iconfont icon-icon08"></i>交易记录<span>0.00 ></span></li>
                <li><i className="iconfont icon-shenfenrenzheng"></i>身份认证<span>未认证 ></span></li>
                <li><i className="iconfont icon-wodeyinhangqia"></i>我的银行卡<span>未绑定 ></span></li>
                <li><i className="iconfont icon-shezhi"></i>设置<span> ></span></li>
            </ul>
        </div>)
    }
}
export default Zhanghu;