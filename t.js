const { execFile } = require('child_process');
const iconv = require('iconv-lite');

const fs = require('fs')
const child = execFile('ping', ['www.baidu.com'], { encoding: 'binary' }, (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    const buf = Buffer.from(stdout, 'binary')
    const res = iconv.decode(buf, 'gbk')
    fs.writeFileSync('demo.txt', res)
    console.log(res);
});