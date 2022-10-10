// 终端用命令  npx nodemon server.js 来启动改内容的时候可以自动重新启动服务

// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();


// express.static()函数，通过它可以创建一个静态资源服务器
// 例如 通过下面代码就可以将public目录下的文件对外开发访问了
// app.use(express.static('pubilc'));
app.use(express.static('../AJAx/原生AJAx')); //可以在网页上访问文件里面的html了 例127.0.0.1/8000/1.get请求.html
// 如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下
app.use('/JS',express.static('../JS')); // 例 127.0.0.1/8000/JS/2.html



// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
// 路由是指客户端的请求与服务器处理函数之间的映射关系
app.get('/server',(require,response) =>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    // req.query对象 ,可以访问客户端通过查询字符串的形式发送到服务器的参数  即客户端通过 ?name=xj&age = 20;
    response.send(require.query);
    
    // 设置响应体
    // response.send('Hello AJax GET');
});

app.get('/user/:ids/:name',(req,res) => {
    // req.params对象 可以访问url中通过 : 匹配到的动态参数
    res.send(req.params);
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
    // 设置响应头 设置允许跨域
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