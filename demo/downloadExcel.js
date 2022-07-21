const xlsx = require('node-xlsx');
const fs = require('fs')
const mysql = require('mysql');
const writIn = [{
  name: 'posts',
  data: []
}]
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root',
  database : 'test'
  });//创建mysql链接
connection.connect();
connection.query(`SELECT * FROM Posts;`, function (error, results, fields) {
  if (error) console.log(error);
  for(const e of results){
    writIn[0].data.push(Object.values(e))
  }
  // console.log(writIn[0].data);
  //构建buffer
  const buffer = xlsx.build(writIn);
  //写入s.xls
  fs.writeFileSync('posts.xls', buffer)
});//执行sql语句
  
connection.end();//关闭链接



// const downloadExcel = ()=>{

// }

// console.log(xlsx.parse(fs.readFileSync('posts.xls'))[0].data);