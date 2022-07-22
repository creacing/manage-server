const iconv = require('iconv-lite'); // 防止中文乱码

const preventChineseConfused = (data) => {
  //to binary
  const buffer = Buffer.from(data, 'binary')
  //to gbk
  const res = iconv.decode(buffer, 'gbk')
  return res
}

module.exports = preventChineseConfused