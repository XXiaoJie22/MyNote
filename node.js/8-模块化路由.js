const express = require('express');
const app = express();

// 导入路由模块
const router = require('./8-模块化路由-创建路由模块');
// 注册路由模块
//app.use(router);  
// app.use()函数的作用 用来注册全局中间件
// 为路由添加前缀 类似前面的静态资源
app.use('/api',router); // 路由地址访问时要加前缀 例http://127.0.0.1:8080/api/user/list
app.listen(8080,()=>{
    console.log('服务器已启动');
});