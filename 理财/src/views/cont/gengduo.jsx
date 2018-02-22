import React, {Component} from 'react';
import Header from '../../components/Header/header.jsx';
class Gengduo extends Component{
    render(){
        return (<div className="geng">
            <Header>更多</Header>
                <ul className="ulss">
                    <li><i className="iconfont icon-xinwengonggao"></i>新闻广告</li>
                    <li><i className="iconfont icon-tuhaobang"></i>土豪榜</li>
                    <li><i className="iconfont icon-yuanbao1"></i>关于我们</li>
                    <li><i className="iconfont icon-ordinarycontact"></i>联系我们</li>
                    <li><i className="iconfont icon-yonghuxieyi"></i>用户协议</li>
                    <li><i className="iconfont icon-bangzhu"></i>帮助中心</li>
                </ul>
        </div>)
    }
}
export default Gengduo;