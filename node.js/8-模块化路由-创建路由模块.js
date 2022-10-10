// 为了方便对路由进行模块化管理，Express不建议将路由直接挂载到app上，而是推荐将路由抽离为单独的模块


var express = require('express');
var router = express.Router();  //创建路由对象

router.get('/user/list',(req,res) => {  // 挂载路由
    res.send('Get user list');
});

router.post('/user/add',(req,res) => {
    res.send('Add new user');
});

module.exports = router;  // 向外导出路由对象