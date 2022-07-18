const { execFile, exec } = require('child_process');
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
        const child = execFile('ping', ['www.baidu.com'], { encoding: 'binary' }, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            }
            const buf = Buffer.from(stdout, 'binary')
            const res = iconv.decode(buf, 'gbk')
                // fs.writeFileSync('demo.txt', res)
                // console.log(res);
            resolve(res)
        });
    })
}

//返回操作系统所有进程
const getAllTask = () => {
    return new Promise((resolve, reject) => {
        execFile('tasklist', function(err, stdout, stderr) {
            if (err) {
                reject(err);
            }

            resolve(stdout)
        });
    })
}

//当前本机所有端口占用情况
const getAllPorts = () => {
    return new Promise((resolve, reject) => {
        execFile('netstat', ['-ano'], function(err, stdout, stderr) {
            if (err) {
                reject(err);
            }

            resolve(stdout)
        });
    })
}

//查找指定的端口
const findTargetPort = (port) => {
    return new Promise((resolve, reject) => {
        exec(`netstat -ano|findstr ${port}`, function(err, stdout, stderr) {
            if (err) {
                reject(err);
            }

            resolve(stdout)
        });
    })
}

//显示以太网统计信息
const getWLANInfo = () => {
    return new Promise((resolve, reject) => {
        exec(`netstat -e`, function(err, stdout, stderr) {
            if (err) {
                reject(err);
            }

            resolve(stdout)
        });
    })
}