import React,{Component} from 'react';
import axios from 'axios';		//引入axios

import FilmCommons from '../filmCommons' ;   //引入影片列表组件
class Soon extends Component{
	constructor(){
		super();
		this.state = {
			soonListData:[],
			page:1,  //设置初始页面加载数
			total:1,
			soonShow:true
		}
	}
	componentDidMount(){
		axios.get('/v4/api/film/coming-soon?page=1&count=7').then((res)=>{
			this.setState({
				soonListData:res.data.data.films,
				total:res.data.data.page.total
			})
		})
		this.soonScroll();
	}
	soonScroll(){
		let _this = this;
		window.onscroll = function(){
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			let count = Math.floor(scrollTop/(10*_this.state.page));
			console.log(_this.state.page);
			if(count > 1){
				for(let i=2 ;i<=count;i++){
					if(i>_this.state.page){
						_this.soonMoreData(i);
						_this.setState({
							page:_this.state.page+1
						})
					}
				}
			}
		}
	}
	soonMoreData(i){
		
		if(i<=this.state.total){
			axios.get('/v4/api/film/coming-soon?page='+i+'&count=7').then((res)=>{
				let oldArr = this.state.soonListData;
				let newArr = [];
				newArr = oldArr.concat(res.data.data.films);
				this.setState({
					soonListData:newArr
				})
			})
		}else{
			this.setState({
				soonShow:false
			})
		}
	}
	render(){
		return (
			<div>
				<FilmCommons filmsListData={this.state.soonListData} type="soon"/>
				<div style={{'width':'100%','height':'50px','textAlign':'center','lineHeight':'50px','fontSize':'20px'}}>
					{this.state.soonShow?<i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i>:'没有更多了哦'}
				</div>
			</div>
		)
	}
}

export default Soon;