import React from 'react';
class Header extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <header className="header">
                <a href="#">返回</a>
                <a href="#">新鲜制造</a>
                <a href="#">...</a>
            </header>
        )
    }
}
export default Header;