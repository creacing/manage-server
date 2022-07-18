const { exec } = require('child_process');
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

getWLANInfo('3720').then(res => {
    console.log(res);
})