import React,{Component} from 'react';
import axios from 'axios';   //引入axios请求
import './detailsPage.css' ;  //引入样式


class DetailsPage extends Component{
	constructor(){
		super();
		this.state = {
			detailsData:[],
			success:false
		}
		let d = new Date(this.state.detailsData.premiereAt);
		this.state = {
			times:this.formatDate(d)
		}
	}
	componentDidMount(){
		axios.get('/v4/api/film/'+this.props.match.params.films+'?__t=1537324117870').then((res)=>{
			this.setState({
				detailsData:res.data.data.film,
				success:true
			})
		})
		
	}
	previous=()=>{
		this.props.history.goBack(-1);
	}
	formatDate(now) {
        let month = now.getMonth() + 1;
        let date = now.getDate();
        return month + "月" + date + "日" ;
    }
	render(){
		return (
			<div className="detailsPage">
				<div className="titleTop">
					<i className="fa fa-reply fa-2x" onClick={this.previous}></i>
					{
						this.state.success?<span>{this.state.detailsData.name}</span>:<i className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
					}
				</div>
				{
					this.state.success?
					<div className="introduce">
						<img src={this.state.detailsData.cover.origin} />
						<div className="introduceTitle">
							影片简介
						</div>
						<div className="introduceContent">
							<p>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演 :{this.state.detailsData.director}</p>
							<p> 主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演 :{this.state.detailsData.actors.map((item,index)=>index < this.state.detailsData.actors.length-1?<span key={index}>{item.name} | </span>:<span key={index}>{item.name}</span>)}</p>
							<p>地区语言:{this.state.detailsData.language}</p>
							<p>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:{this.state.detailsData.category}</p>
							<p>上映日期:{this.state.times}上映</p>
							<div className="introduceExplain">{this.state.detailsData.synopsis}</div>
						</div>
					</div>
					:
					<div style={{'width':'100%','height':'50px','textAlign':'center','lineHeight':'50px','fontSize':'20px'}}>
					<i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i>正在加载
					</div>
				}
				<div className="nowShopping">
					<button>立即购票</button>
				</div>
			</div>
		)
	}
}

export default DetailsPage;