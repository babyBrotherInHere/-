import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';     //引入轮播图插件
class SwiperList extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<ReactSwipe class="carousel" swipeOptions={{continuous:true,auto:3000}} key={this.props.swiperList.length}>
				{
					this.props.swiperList.map((item)=>
						<img src={item.imageUrl} alt={item.name} key={item.id}/>
					)
				}
				</ReactSwipe>
			</div>
		)
	}
}

export default SwiperList;