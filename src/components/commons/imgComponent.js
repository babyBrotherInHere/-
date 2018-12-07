import React,{Component} from 'react';
import './imgComponent.css'
class ImgComponent extends Component{
	changeImg(){
		this.refs['image'].style.opacity = 1;
	}
	render(){
		const {src,alt,placeholder} = this.props;
		const bagImgStyle = {
			background:'url('+placeholder+')',
			backgroundSize:'100%',
		}
		return (
			<div style={bagImgStyle}><img ref="image" src={src} alt={alt} onLoad={this.changeImg.bind(this)} style={{'opacity':'0','transition':'all 2s ease','width':'100%'}}/></div>
		)
	}
}

export default ImgComponent;
