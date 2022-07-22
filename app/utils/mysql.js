const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root',
  database : 'test'
  });//创建mysql链接
connection.connect();
connection.query(`SELECT * FROM Posts;`, function (error, results, fields) {
  if (error) console.log(error);
});//执行sql语句
  
connection.end();//关闭链接