import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import NavBar from '../components/commons/navbar.js' ;    //引入头部导航
import './index.css';
//引入页面组件
import Home from '../containers/home';
import Film from '../containers/film';
import Cinema from '../containers/cinema';
import Shopping from '../containers/shopping';
import My from '../containers/my';
import SalesCard from '../containers/salesCard';
import DetailsPage from '../components/commons/detailsPage';  // 导入详情页
import GpsNav from '../components/commons/gps';    //头部地理位置导航

const App = () =>(
	<BrowserRouter>
		<div>
			<div className="topStyle">
				<NavBar />
			</div>
			<div className="ListStyle">
				<Route path="/" exact component={Home}/>
				<Route path="/film" component={Film} />
				<Route path="/cinema" component={Cinema} />
				<Route path="/shopping" component={Shopping} />
				<Route path="/my" component={My} />
				<Route path="/salesCard" component={SalesCard} />
				<Route path="/detailsPage/:films" component={DetailsPage} />
				<Route path="/gps" component={GpsNav} />
			</div>
		</div>
	</BrowserRouter>
)

//导出路由表
export default App;