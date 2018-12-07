import React,{Component} from 'react';
import axios from 'axios';

import FilmCommons from '../filmCommons' ;   //引入影片列表组件
class Underway extends Component{
	constructor(){
		super();
		this.state = {
			underwayListData:[], //正在上映的电影
			page:1,  //设置初始页面加载数
			total:1,
			show:true
		}
		
	}
	componentDidMount(){
		axios.get('/v4/api/film/now-playing?page=1&count=7').then((res)=>{
			this.setState({
				underwayListData:res.data.data.films,
				total:res.data.data.page.total
			})
		})
		this.underwayScroll();
	}
	underwayScroll(){
		let _this = this;
		window.onscroll = function(){
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			let count = Math.floor(scrollTop/(10*_this.state.page));
			if(count > 1){
				for(let i=2 ;i<=count;i++){
					if(i>_this.state.page){
						_this.moreData(i);
						_this.setState({
							page:_this.state.page+1
						})
					}
				}
			}
		}
	}
	moreData(i){
		if(i<=this.state.total){
			axios.get('/v4/api/film/now-playing?page='+i+'&count=7').then((res)=>{
				let oldArr = this.state.underwayListData;
				let newArr = [];
				newArr = oldArr.concat(res.data.data.films);
				this.setState({
					underwayListData:newArr
				})
			})
		}else{
			this.setState({
				show:false
			})
		}
	}
	render(){
		return (
			<div>
				<FilmCommons filmsListData={this.state.underwayListData} type="underway"/>
				<div style={{'width':'100%','height':'50px','textAlign':'center','lineHeight':'50px','fontSize':'20px'}}>
					{this.state.show?<i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i>:'没有更多了哦'}
				</div>
			</div>
		)
	}
}

export default Underway;