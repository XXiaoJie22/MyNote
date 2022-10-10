// 写项目前输入 npm init -y 来初始化，创建package.json 文件
// 运行 npm install 或npm i 会先读取package.json 里面dependencies节点，然后一次性安装里面提到的所有依赖包
// npm uninstall 命令来卸载指定的包，而且会把包从package.json 里面dependencies节点移除
// 如果某些包只在项目开发阶段用到，在项目上线之后不会用到，则把这些包记录到devDependencies中 用 npm i 包名 -D 命令就能把包记录到devDependencies中
// npm i 包名 -g 则会把包安装为全局包  npm uninstall 包名 -g 卸载
// i5ting_toc 可以把md文档转为html页面的小工具
const s = require('express');