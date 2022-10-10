// 1. 导入fs模块，来操作文件
const fs = require('fs');

// 调用fs.readFile() 方法来读取文件
// 参数1 读取文件的存放路径
// 参数2 编码格式 ，一般默认指定utf8 可选参数
// 参数3 回调函数，拿到读取成功和失败的结果 dataStr err
fs.readFile('./1.txt','utf8',(err,dataStr) => {
    console.log(err); // 如果读取成功 err值为null
    console.log(dataStr);
});

// 调用fs.writeFile() 方法来写入文件内容
// 第二个参数是写入的内容
// __dirname 表示当前文件所处目录  下面的路径就相当于绝对路径
fs.writeFile(__dirname + '/1.txt','136594','utf8',function(err){
    // 写入成功 值为null 失败则是错误对象
    if (err){
        console.log('写入失败');
    }else {
        console.log('写入成功');
    }
    fs.readFile('./1.txt','utf8',(err,dataStr) => {
        console.log(err); // 如果读取成功 err值为null
        console.log(dataStr);
    });
});