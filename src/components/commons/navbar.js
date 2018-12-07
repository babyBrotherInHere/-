import React,{Component} from 'react';
import './navbar.css' ;   //导入导航样式
import {Link} from 'react-router-dom' ;
class NavBar extends Component{
	constructor(){
		super();
		this.state = {
			isShow:false,
			isDisplay:false
		}
		
	}
	componentChange=()=>{
		this.setState({
			isShow:!this.state.isShow
		});
	}
	componentDidMount(){
		let _this = this;
		document.onscroll = function(){
			var goScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if(goScrollTop > 100){
				_this.setState({
					isDisplay:true
				})
			}else{
				_this.setState({
					isDisplay:false
				})
			}
		}
	}
	goTopChange(){
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	}
	render(){
		return(
			<div>
				<div className="NavTop">
					<i className="fa fa-bars fa-2x" onClick={this.componentChange}></i>
					<span>卖座电影</span>
					<span className="NavTopGpsStyle"><Link to="/gps">当前城市</Link></span>
				</div>
				<div className="LeftList" style={this.state.isShow?{"left":"0px"}:{'left':'-80%'}}>
					<ul>
						<li onClick={this.componentChange}><Link to="/">首页</Link></li>
						<li onClick={this.componentChange}><Link to="/film/underway">影片</Link></li>
						<li onClick={this.componentChange}><Link to="/cinema">影院</Link></li>
						<li onClick={this.componentChange}><Link to="/shopping">商城</Link></li>
						<li onClick={this.componentChange}><Link to="/my">我的</Link></li>
						<li onClick={this.componentChange}><Link to="/salesCard">卖座卡</Link></li>
					</ul>
				</div>
				<div className="goTop" style={this.state.isDisplay?{'display':'block'}:{'display':'none'}} onClick={this.goTopChange}>
					<i className="fa fa-arrow-up fa-2x"></i>
				</div>
			</div>
			
		)
	}
}

export default NavBar;