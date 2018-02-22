import React from 'react';
class Detial extends React.Component{
    componentDidMount(){
        console.log(this.props.match.params);
    }
    click(){
        localStorage.setItem('ids', '2');
    }
    render (){
        return(<div>
            <h3 onClick={this.click}>这是详情页</h3>
        </div>);
    }
}
export default Detial;