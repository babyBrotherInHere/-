import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ImgComponent from '../../../../components/commons/imgComponent'
class FilmItem extends Component{
	constructor(props){
		super(props);
		let d = new Date(this.props.item.premiereAt);
		this.state = {
			times:this.formatDate(d)
		}
	}
	formatDate(now) {
        let month = now.getMonth() + 1;
        let date = now.getDate();
        return month + "月" + date + "日" ;
    }
    
	render(){
		return (
			<li>
				<Link to={"/detailsPage/"+this.props.item.id}>
					{/*<img src={this.props.item.cover.origin} />*/}
					<ImgComponent src={this.props.item.cover.origin} alt={this.props.item.name} placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png"/>
					<div className="nowPlayingText">
						<span>{this.props.item.name}</span>
						{
							this.props.type=='nowPlayingList'?
							<div><span className="score">{this.props.item.grade}</span>
							<p>{this.props.item.cinemaCount+'家影院上映'+this.props.item.watchCount+'人购票'}</p></div>
							:<span className="timeStyle">{this.state.times+'上映'}</span>
						}
					</div>
				</Link>
			</li>
		)
	}
}

export default FilmItem;