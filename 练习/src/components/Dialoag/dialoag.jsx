import React, {Component} from 'react';
import '../../css/dialoag.css';
import Masker from './masker.jsx';
import Content from './content.jsx';
import Title from './title.jsx';
import Message from './message.jsx';
import Button from './button.jsx';
import PropTypes from 'prop-type';
class Dialoag extends Component{
    constructor(){
        super();
        this.state = {
            isShow: false
        };
        this.hide = this.hide.bind(this);
        this.centain = this.centain.bind(this);
    }
    show(){
        this.setState((state) => {
            state.isShow = true;
            return state;
        });
    }
    hide(){
        this.setState((state) => {
            state.isShow = false;
            return state;
        });
    }
    centain(){
        this.props.callback();
        this.setState((state) => {
            state.isShow = false;
            return state;
        });
    }
    render () {
        return ( this.state.isShow && <div className='dialoag'>
        <Masker>
            <Content>  
                <Title><img src="./src/img/2.png" alt=""/><span onClick={this.hide}>X</span></Title>
                <Message>亲，我们为您准备了60道体质测试题，请耐心如实答题，获取真是体质结果</Message>
                <Button onhide={this.centain}><img src="./src/img/4.png" alt=""/></Button>
            </Content>
        </Masker>
    </div> );
    }
}
export default Dialoag;
// Dialoag.propTypes={
//     callback: PropTypes.func.isRequired
// };