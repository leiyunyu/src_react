import React from 'react';
class MultiPick extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[1, 2, 3],
            activeIndex: []
        }
    }
    pick(ind){
        let {activeIndex} = this.state
        if(activeIndex.indexOf(ind) == -1){
            this.setState((state) => {
                state.activeIndex.push(ind)
                this.props.callback(state.activeIndex);
                return state
            })
        }else{
            let idx = activeIndex.indexOf(ind)
            this.setState((state) => {
                state.activeIndex.splice(idx, 1)
                this.props.callback(state.activeIndex);
                return state
            })
        }
    }
    render(){
        let {children, activeclass} = this.props;
        if(!children){
            return (
                <React.Fragment>
                    {this.state.arr.map((item, index) => {
                        if(this.state.activeIndex.indexOf(index) != -1){
                            return <span className={activeclass} key={index} onClick={() => {this.pick(index)}}>{item}</span>                        
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
                    if(this.state.activeIndex.indexOf(index) != -1){
                        return <span className={activeclass} key={index} onClick={() => {this.pick(index)}}>{Item}</span>                        
                    }else{
                        return <span key={index} onClick={() => {this.pick(index)}}>{Item}</span>                        
                    }
                })}
            </React.Fragment>
        )
        }
    }
}
export default MultiPick;