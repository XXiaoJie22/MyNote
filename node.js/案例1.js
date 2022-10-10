const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer();

server.on('request',(req,res) => {
    // 获取客户端请求的url地址
    const url = req.url;
    // 把请求的url地址映射为具体文件的存放路径
    // const fpath = path.join(__dirname,url);
    let fpath = '';
    // 路径优化
    if(url == '/'){
        fpath = path.join(__dirname,'./案例一/index.html');
    }else {
        fpath = path.join(__dirname,'./案例一',url);
    }

    // 根据映射过来的文件路径来读取内容
    fs.readFile(fpath,(err,dataStr) => {
        if(err){
            return res.end('404 Not Found');
        }else {
            res.end(dataStr);
        }
    });
});

server.listen(8080,()=>{
    console.log('服务器 http://127.0.0.1 已启动');
});