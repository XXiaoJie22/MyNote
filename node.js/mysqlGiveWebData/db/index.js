import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',  // 数据库的ip地址
    port: 3306,  // 数据库的端口号
    user: '3119005184',  // 登录数据库的账号
    password: 'Gzj20010627', // 密码
    database: 'book' // 指定要操作的数据库
})

// 导出pool的promise方法，外界能以promise的方式操作数据库
export default pool.promise()