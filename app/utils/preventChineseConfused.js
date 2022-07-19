const iconv = require('iconv-lite'); // 防止中文乱码

const preventChineseConfused = (data) => {
  const buffer = Buffer.from(data, 'binary')
  // console.log(buffer);
  const res = iconv.decode(buffer, 'gbk')
  // console.log(res);
  return res
}

module.exports = preventChineseConfused