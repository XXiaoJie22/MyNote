const express = require('express');
const app = express();

// 配置解析表单数据的中间件
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static('../AJAx/原生AJAx'));

// 解决接口跨域问题  终端写 npm i cors
// 配置中间件
const cors = require('cors');
app.use(cors());

// 导入路由模块
const router = require('./10-router');
// 注册到app上
app.use('/api',router);


app.listen(8000,() => {
    console.log('服务器已启动');
});