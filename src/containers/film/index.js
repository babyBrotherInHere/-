import React,{Component} from 'react';    //引入react框架
import {Route,NavLink} from 'react-router-dom';    //引入路由Link
import axios from 'axios' ;     //引入axios
import './index.css' ;  //引入样式

import Soon from './soon'   //引入即将上映的电影的组件
import Underway from './underway' ; //引入正在上映电影的组件

class Film extends Component{
	constructor(){
		super();
		this.state = {
			underway:[],	//正在上映数据
			soonData:[],   //即将上映数据
		}
	}
	
	render(){
		return (
				<div className="film">
					<div className="topNav">
						<span><NavLink to="/film/underway" activeClassName="active">正在热映</NavLink></span>
						<span><NavLink to="/film/soon" activeClassName="active">即将上映</NavLink></span>
					</div>
					<div style={{'background': '#F9F9F9','padding': '0 15px'}}>
						<Route path="/film/soon" component={Soon}></Route>
						<Route path="/film/underway" component={Underway}></Route>
					</div>
				</div>
		)
	}
}

export default Film;