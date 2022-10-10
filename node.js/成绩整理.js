const fs = require('fs');
fs.readFile('./oldC.txt','utf8',(err,dataStr) =>{
    if(err){
        console.log('导入失败');
    }else {
        console.log(dataStr);
        // 按;进行分割字符串成数组
        const old = dataStr.split(';');
        console.log(old);
        // 把 = 替换为 ：
        const arrNew = [];
        old.forEach(item => {
            arrNew.push(item.replace('=',':'));
        });
        console.log(arrNew);
        // 把新数组整理为字符串
        const newStr = arrNew.join('\r\n');
        console.log(newStr);
        fs.writeFile('./newC.txt',newStr,'utf8',err => {
            if(err){
                log(err.message);
            }else{
                console.log('写入成功');
            }
        });
    }
});