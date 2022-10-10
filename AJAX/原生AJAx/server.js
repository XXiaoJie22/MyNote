// npm install -g nodemon 安装nodemon为全局可用的工具
// 终端用命令  npx nodemon server.js 来启动改内容的时候可以自动重新启动服务


// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server',(require,response) =>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('Hello AJax GET');
});
// psot 请求
app.post('/server',(require,response) =>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('Hello AJax POST');
});
// json响应
app.all('/json-server',(require,response) =>{
    // 设置响应头 设置允许跨域  第二个参数可以写具体的网站
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    const data = {
        name: 'xiaojie'
    };
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    response.send(str);
});
// 延迟响应
app.get('/delay',(require,response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(() => {
        response.send('延时');
    },3000);
});

// 4.监听端口启动服务
app.listen(8000,()=>{
    console.log('服务已启动');
});