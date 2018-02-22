import React, {Component} from 'react';
class Section extends React.Component{
    render () {
        return (<section className="section">
            {this.props.children}
        </section>);
    }
}
export default Section;