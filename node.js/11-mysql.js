// 1.导入mysql模块
const mysql = require('mysql');
// 2.建立与MySQL数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',  // 数据库的ip地址
    user: '3119005184',  // 登录数据库的账号
    password: 'Gzj20010627', // 密码
    database: 'book' // 指定要操作的数据库
});

// 检测mysql模块是否正常工作
// 8.0版本的mysql 需要更改验证方式才能连接   mysql里面输入：ALTER user'3119005184'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Gzj20010627';
db.query('select 1',(err,result) => {
    if (err) {
        return console.log(err.message);
    }
    console.log(result);
});

// 查询语句   
db.query('select * from book',(err,result) => {
    if (err) {
        return console.log(err.message);
    }
    console.log(result);  //得到的结果是数组
});

// 插入语句 
const book1 = {BOOK_NAME:'编译原理',ISBN: '4697846-26',CATEGORY: '计算机类'};
const book2 = {BOOK_NAME:'算法',ISBN: '4697846-27',CATEGORY: '计算机类'};
const sql1 = 'insert into book (BOOK_NAME,ISBN,CATEGORY) values (?,?,?)';
// 如果插入的数据对象属性和数据表字段一一对应，则跨域简化一点
const sql2 = 'insert into book set ?';
// ? 占位符

// db.query(sql1,[ book1.BOOK_NAME,book1.ISBN,book1.CATEGORY],(err,results) => {
//     if(err) return console.log('插入失败')
//     if(results.affectedRows ===1) {console.log('插入成功');} // 插入语句的results是一个对象
// });

// 简化的方法

// db.query(sql2,book2,(err,results) => {
//     if(err) return console.log('插入失败')
//     if(results.affectedRows ===1) {console.log('插入成功');} // 插入语句的results是一个对象
// });


// 更新数据
const ud_book3 = {BOOK_ID: 4,BOOK_NAME: '线性代数'};
// 一一对应可简化
const ud_book4= {BOOK_ID: 4,BOOK_NAME:'大学英语',ISBN: '4669846-27',CATEGORY: '计算机类'};
const ud_sql = 'update book set BOOK_NAME = ? where BOOK_ID = ?';
const ud_sql2 = 'update book set ? where BOOK_ID = ?';

db.query(ud_sql,[ud_book3.BOOK_NAME,ud_book3.BOOK_ID],(err,results) => {
    if(err) return console.log(err.message);
    if(results.affectedRows ===1) {console.log('更新成功');}
});

// 简化版更新
db.query(ud_sql2,[ud_book4,ud_book4.BOOK_ID],(err,results) => {
    if(err) return console.log(err.message);
    if(results.affectedRows ===1) {console.log('更新成功');}
});


// 删除数据
const deSql = 'delete from book where BOOK_ID = ?';
// 只有一个占位符，可以省略数组
db.query(deSql,7,(err,results) => {
    if(err) return console.log(err.message);
    if(results.affectedRows ===1) {console.log('删除成功');}
});

// 因为删除了就无了，太危险了，因此推荐使用标记删除的形式，数据库多加一个属性status，通过更新它的值，来模拟删除的动作，status = 1 表示该数据删除，status = 0,表示该数据在

// db.query('update book set status = 1 where BOOK_ID = ?',6,(err, results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows ===1) {console.log('标记删除成功');}
// })