import React,{Component} from 'react';
import './index.css' ;
import {Link} from 'react-router-dom';
class FilmCommons extends Component{
	constructor(props){
		super(props);
		this.state = {
			weekDay:''
		}
	}
	formatDate(now){
		let d = new Date(now);
        let month = d.getMonth() + 1;
        let date = d.getDate();
        let day = d.getDay()+1;
        this.state.weekDay = '星期'+day ;
        return month + "月" + date + "日";
    }
	render(){
		return (
			<div className="FilmCommons">
			{
				this.props.filmsListData.map((item,index)=>
					<ul className="filmsBox" key={index}>
						<Link to={"/detailsPage/"+item.id}>
						<li>
							<div>
								<img src={item.poster.origin} alt={item.name}/>
							</div>
							<div>
								<p className="titleStyle"><span>{item.name}</span><span>{this.props.type==='underway'?<span>{item.grade}</span>:<span></span>}<i className="fa fa-angle-right"></i></span></p>
								<p className="contextStyle">{item.intro}</p>
								<p className="bottomContext" style={this.props.type==='soon'?{'color':'orangered'}:{}}><span>{this.props.type==='underway'?item.cinemaCount+"家影院上映":this.formatDate(item.premiereAt)+'上映'}</span><span>{this.props.type==='underway'?item.watchCount+'人购票':this.state.weekDay}</span></p>
							</div>
						</li>
						</Link>
					</ul>
				)
			}
			</div>
		)
	}
}

export default FilmCommons;