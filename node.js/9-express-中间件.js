// 中间件相对于路由多了个next函数
// next函数是对多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由
const express = require('express');
const app = express();

// 最简单的中间件 多个中间件之间共享一份req和res
const mw = (req,res,next) => {
    const time = Date.now();
    // 为req对象挂载自定义属性，把上面的属性共享给后面所有的路由
    req.startT = time;
    console.log('这是一个中间件');
    // 最后一定要调用next
    next();
};
const mw1 = (req,res,next) =>{
    console.log('局部中间件');
    next();
};

// 全局生效的中间件  即客户端发起的任何请求，到达服务器之后 都会触发的中间件
// app.use()可以连续定义多个全局中间件，按顺序先后执行
app.use(mw);
app.get('/user',(req,res) =>{
    res.send(String(req.startT));

});  // 访问这个会先访问中间件再到这个

// 局部生效中间件 使用app.use()定义的中间件 中间可以放任意多个局部中间件，用逗号隔开，或者加个中括号[mv1,mw2]
app.get('/onwer',mw1,(req,res) => { // 当用户请求它的时候生效mw1
    res.send(String(req.startT));
});

// 中间件的分类
// 1.应用级别的中间件 通过app.use() app.get() app.post()，绑定到app实例上的中间件
// 2.路由级别的中间件 和上面类似，只不过是绑定在router实例上的
// 3.错误级别的中间件 专门用来捕获整个项目发生的异常错误  函数中包含4个形参  (err,req,res,next)
app.use((err,req,res,next) => {  // 发生错误时调用
    console.log(err.message);
});
// 4.express内置中间件 1)express.static  快速托管静态资源的内置中间件  2) express.json 解析json格式请求体数据 应用:app.use(express.json())  3)express.urlencoded 解析URL-encoded格式的请求体数据 应用:app.use(express.urlencoded({extended: false}))
// 5.第三方的中间件 运行npm i 安装中间件  使用require导入中间件  调用app.use()注册使用中间件
// 如果没有配置任何解析表单数据的中间件，req.body默认是underfined


app.listen(8080,() => {
    console.log('服务已启动');
});