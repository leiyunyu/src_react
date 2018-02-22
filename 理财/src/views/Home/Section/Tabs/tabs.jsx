import React, {Component} from 'react';
class Tabs extends React.Component{
    constructor() {
		super()
		this.state = {
			index:0
		}
	}

	tabToggle(setIndex) {
		this.setState((state) => {
			state.index = setIndex;
			return state;
		})
	}

	render() {
		let {index} = this.state;
		return  <div className="tabs">
					<li className={index == 0 ? 'actived': ''} onClick={()=>{this.tabToggle(0)}}><a>侵权产品</a></li>
					<span></span>
					<li className={index == 1 ? 'actived': ''} onClick={()=>{this.tabToggle(1)}}><a>优选基金</a></li>
				</div>
	}
}
export default Tabs;