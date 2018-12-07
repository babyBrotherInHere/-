import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';   //导入字体图标

import App from './router' ;    //引入路由表

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'react-flexible'    //导入配置px转rem的插件

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
