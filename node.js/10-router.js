const express = require('express');
const router = express.Router();

// 挂载对应的路由
router.get('/get',(req,res) => {
    // 通过req.query 获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query;
    const ob ={
        status : 0, // 0表示处理成功，1表示处理失败
        msg : 'Get 请求成功',  // 状态的描述
        data : query // 需要响应给客户端的数据
    };
    
    res.send(ob);
});
// post接口
router.post('/post',(req,res) =>{
    // 通过req.body 获取请求体中包含的url-encoded格式的数据
    const body = req.body;
    
    res.send( {
        status: 0,
        msg: 'post 请求成功',
        data: body
    });
});

// JSONP接口  浏览器端通过<script>标签的src属性，请求服务器上的数据，同时，服务器返回一个函数的调用 注意要写到cors跨域的前面



module.exports = router;