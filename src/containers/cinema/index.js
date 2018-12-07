import React,{Component} from 'react';
import './index.css' ;
import axios from 'axios';

class Cinema extends Component{
	constructor(){
		super();
		this.state = {
			cinemaData:[]
		}
	}
	componentDidMount(){
		axios.get('/v4/api/cinema?__t=1537350414408').then((res)=>{
			let oldArr = res.data.data.cinemas;
			let newArr = []; // 保存整理后的二维数组
			let k = 0;
			
			for(let item of oldArr){
				let repeat = false ;  //表示不重复
				for(var j = 0;j<newArr.length;j++){
					if(newArr[j].name === item.district.name){
						repeat = true;
						break;
					}
				}
				//如果不重复
				if(!repeat){
					newArr.push({'id':k,'name':item.district.name,'content':[],'type':false});
					k++;
				}
				for(var i = 0;i<newArr.length;i++){
					if(newArr[i].name === item.district.name){
						newArr[i].content.push(item);
					}
					if(i===0){   //设置第一条数据的type为true,做首次展示作用
						newArr[i].type = true;
					}
				}
			}
			console.log(newArr);
			this.setState({
				cinemaData:newArr
			})
		})
	}
	changeType = (id) =>{
		let oldArr = this.state.cinemaData;
		oldArr[id].type = !oldArr[id].type;
		this.setState({
			cinemaData:oldArr
		})
	}
	render(){
		return(
			<div className="cinema">
				{
					this.state.cinemaData.map((item)=>
					<div  key={item.id}>
						<div className="cinemaRegion" onClick={()=>this.changeType(item.id)}>{item.name}</div>
						<ul style = {item.type?{'display':'block'}:{'display':'none'}}>
							{
								item.content.map((i)=>
									<li className="cinemaLi" key={i.id}>
										<span className="cinemaName">{i.name}</span><span className="CuspBrackets">></span>
										<p>{i.address}</p>
										<span>纬度:{i.geocode.latitude}</span><span>经度:{i.geocode.longitude}</span>
									</li>
								)
							}
						</ul>
					</div>
					)
				}
			</div>
		)
	}
}

export default Cinema;