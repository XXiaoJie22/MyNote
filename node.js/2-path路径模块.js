const path = require('path');
// path.join() 把多个路径片段拼接为完整的路径字符串
const pathStr = path.join('/a','/b/b','/d','/e');
console.log(pathStr);

// path.basename() 从路径中获取最后的文件名
const fpath = '/c/d/c/index.html';
console.log(path.basename(fpath));
// 去后缀
console.log(path.basename(fpath,'.html'));

// path.extname() 获取拓展名
console.log(path.extname(fpath));