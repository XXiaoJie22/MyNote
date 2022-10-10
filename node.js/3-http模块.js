const http = require('http');
// 创建web服务器实例
const server = http.createServer();
// 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request',(req,res) =>{
    // req.url 客户端请求的url
    // req.method 是客户端请求的类型

    // res.end() ,向客户端响应一些内容，并结束这次请求的处理过程
    // 设置响应头，中文不乱码
    res.setHeader('Content-Type','text/html; charset=utf-8');

    // 根据不同的url响应不同的内容 
    const url = req.url;
    let content = '<h1>404 Not Found<h1>'; // 设置默认内容
    if(url == '/' || url =='/index.html'){ // 用户请求的是主页
        content = '<h1>首页<h1>';
    }else if(url == '/about.html'){ // 用户请求的是about页面
        content = '<h1>关于页面<h1>';
    }
    res.end(content);
});
// 启动服务器
server.listen(8080,()=>{
    console.log('服务器已启动');
});