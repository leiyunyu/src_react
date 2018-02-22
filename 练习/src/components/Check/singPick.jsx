import React from 'react';
class SingPick extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[1, 2, 3],
            activeIndex: 9
        }
    }
    pick(ind){
        this.props.callbacks(ind)
        this.setState((state) => {
            state.activeIndex = ind
            return state
        })
    }
    render(){
        let {children} = this.props;
        if(!children){
            return (
                <React.Fragment>
                    {this.state.arr.map((item, index) => {
                        if(index == this.state.activeIndex){
                            return <span className="active" key={index} onClick={() => {this.pick(index)}}>{item}</span>                        
                        }else{
                            return <span key={index} onClick={() => {this.pick(index)}}>{item}</span>                        
                        }
                    })}
                </React.Fragment>
            )
        }else{
           return ( 
            <React.Fragment>
                {React.Children.map(children, (Item, index) => {
                    if(index == this.state.activeIndex){
                        return <span className="active" key={index} onClick={() => {this.pick(index)}}>{Item}</span>                        
                    }else{
                        return <span key={index} onClick={() => {this.pick(index)}}>{Item}</span>                        
                    }
                })}
            </React.Fragment>
        )
        }
    }
}
export default SingPick;