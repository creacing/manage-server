const { execFile } = require('child_process');
const iconv = require('iconv-lite'); // 防止中文乱码
const fs = require('fs')

const getNodeVersion = () => {
    return new Promise((resolve, reject) => {
        const child = execFile('node', ['--version'], (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            resolve(stdout)
        });
    })

}

const getNetRate = () => {
    return new Promise((resolve, reject) => {
        const child = execFile('ping', ['www.baidu.com'], { encoding: 'binary' }, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            const buf = Buffer.from(stdout, 'binary')
            const res = iconv.decode(buf, 'gbk')
                // fs.writeFileSync('demo.txt', res)
                // console.log(res);
            resolve(res)
        });
    })
}