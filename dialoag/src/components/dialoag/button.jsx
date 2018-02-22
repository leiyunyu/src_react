import React, {Component} from 'react';
class Button extends Component{
    render () {
        return <button className="button" onClick={this.props.onhide}>{this.props.children}</button>;
    }
}
export default Button;