import React,{Component} from 'react';
import axios from 'axios';  //引入axios请求数据
import './index.css'  //引入样式
class GpsNav extends Component{
	constructor(){
		super();
		this.state = {
			currentData:[],   //当前城市位置,定位位置数据
			AllAreasData:[],  //全部地区数据
		}
	}
	componentDidMount(){
		axios.get('v4/api/city/locate').then((res)=>{
			this.setState({			//当前定位城市数据
				currentData:res.data.data.city
			})
		})
		axios.get('/v4/api/city?__t=1537428495281').then((res)=>{
			let oldArr = res.data.data.cities;
			let newArr = [];
			let k = 0;
			for(let item of oldArr){
				var repeat = false;
				for(var j=0;j<newArr.length;j++){
					if(newArr[j].first === item.pinyin.slice(0,1)){
						repeat = true;
						break;
					}
				}
				if(!repeat){
					newArr.push({'id':k,'first':item.pinyin.slice(0,1),'content':[]});
					k++;
				}
				for(var i=0;i<newArr.length;i++){
					if(newArr[i].first === item.pinyin.slice(0,1)){
						newArr[i].content.push(item);
					}
				}
			}
			this.setState({      //全部地区数据
				AllAreasData:this.computed(newArr)  
			})
		})
	}
	computed(arr){
		var asciiNum = 65;
		let FinalDataArr = [];
		while(asciiNum<=90){
			for(var f=0;f<arr.length;f++){
				if(arr[f].first.charCodeAt() === asciiNum){
					FinalDataArr.push(arr[f]);
				}
			}
			asciiNum++;
		}
		console.log(FinalDataArr);
		return FinalDataArr;
	}
	render(){
		return (
			<div className="GpsNav">
				<p>GPS定位你所在城市</p>
				<p className="currentStyle">{this.state.currentData.name}</p>
				<p>热门城市</p>
				<p className="HotStyle"><span>北京</span><span>上海</span><span>广州</span><span>深圳</span></p>
				<p>按字母排序</p>
				<p className="LetterStyle">
					{
						this.state.AllAreasData.map((item)=>
							<span key={item.id}><a href={'#'+item.first}>{item.first}</a></span>
						)
					}
				</p>
				<div>
					{
						this.state.AllAreasData.map((i)=>
							<div key={i.id}>
								<p id={i.first}>{i.first}</p>
								<div className="LetterStyle">
									{
										i.content.map((k)=>
											<span key={k.id}>{k.name}</span>
										)
									}
								</div>
							</div>
						)
					}
				</div>
			</div>
		)
	}
}

export default GpsNav;