// module.exports对象 可以将模块内的成员共享出去
// 外界用require()方法导入自定义模块时，得到的就是module.exports所指的对象
module.exports.uname = 'XiaoJie';
module.exports.sayHello = function(){};
// exports对象指向module.exports对象，只是简化一点
exports.uage = 14;