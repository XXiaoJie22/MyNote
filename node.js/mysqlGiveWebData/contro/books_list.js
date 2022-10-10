import db from '../db/index.js'

// 把这个方法按需导出
export async function getBooks (req,res){
  try {
    const [books] = await db.query('select * from book')
    res.send({
      status: 0,
      message: '请求成功',
      data: books
    })
  }catch(e) {
    res.send({
      status: 1,
      message: '请求失败',
      desc: e.message
    })
  }
  
}