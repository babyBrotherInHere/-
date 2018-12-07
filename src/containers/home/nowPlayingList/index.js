import React,{Component} from 'react';
import FilmItem from './filmItem';    //引入film组件
import './index.css'; //引入css文件
class NowPlayingList extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<ul className="filmListed">
			{
				this.props.nowPlayingList.map((item)=>
				{
					return <FilmItem item={item} key={item.id} type={this.props.type}/>	
				})
			}
			</ul>
		)
	}
}

export default NowPlayingList;