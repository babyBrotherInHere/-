import React,{Component} from 'react';    //引入react框架
import axios from 'axios';    //引入axios

import './index.css';   //引入css文件
import SwiperList from './swiperList';   //引入轮播图组件
import NowPlayingList from './nowPlayingList'    //引入正在上映的组件


class Home extends Component{
	constructor(){
		super();
		this.state = {
			swiperList:[],   //保存轮播图
			nowPlayingList:[],	//正在上映
			commingSoonList:[]	//即将上映的数据
		}
	}
	componentDidMount(){
		axios.get('/v4/api/billboard/home?__t=1536929564891').then((res)=>{
			this.setState({
				swiperList:res.data.data.billboards          //轮播图数据
			})
		})
		axios.get('/v4/api/film/now-playing?__t=1537028657390&page=1&count=5').then((res)=>{
			this.setState({
				nowPlayingList:res.data.data.films        //正在上映数据
			})
		})
		axios.get('/v4/api/film/coming-soon?__t=1537028657394&page=1&count=3').then((res)=>{
			this.setState({
				commingSoonList:res.data.data.films        //即将上映数据
			})
		})
	}
	render(){
		return (
			<div className="home">
				<SwiperList swiperList={this.state.swiperList}/>
				<NowPlayingList nowPlayingList={this.state.nowPlayingList} type="nowPlayingList" />
				<span className="more">更多热映电影</span>
				<hr noshade={'true'}></hr>
				<span className="hr-more">即将上映</span>
				<NowPlayingList nowPlayingList={this.state.commingSoonList} type="commingSoonList" />
				<span className="more">更多即将上映的电影</span>
			</div>
		)
	}
}

export default Home;