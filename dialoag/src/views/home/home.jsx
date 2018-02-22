import React, {Component} from 'react';
import Dialoag from '../../components/dialoag';
class Home extends Component{
    constructor(){
        super();
        this.tips = this.tips.bind(this);
        this.callback = this.callback.bind(this);
    }
    tips(){
        this.refs.dialoag.show();
    }
    callback(){
        console.log('sdada');
    }
    render () {
        return <div className="home">
            <h3 onClick={this.tips}>Hello World!</h3>
            <Dialoag ref="dialoag" callback={this.callback}></Dialoag>
        </div>;
    }
}
export default Home;