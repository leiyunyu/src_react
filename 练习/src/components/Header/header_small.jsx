import React from 'react';
class HeaderSmall extends React.Component{
    constructor(){
        super();
        this.back = this.back.bind(this);
    }
    back(){
        window.history.go(-1)
    }
    render(){
        return (
            <header className="header_small">
                <a href="#" onClick={this.back}>＜</a>
                <a href="#">{this.props.children}</a>
            </header>
        )
    }
}
export default HeaderSmall;