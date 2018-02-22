import React, {Component} from 'react';
class Content extends Component{
    render(){
        return (<ul className="content">
            {this.props.children}
        </ul>);
    }
}
export default Content;