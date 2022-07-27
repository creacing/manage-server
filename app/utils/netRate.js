let preReceive = 0
let preSend = 0
const { execFile, exec } = require('child_process');
const preventChineseConfused = require('./preventChineseConfused.js')

const calculateNetRate = () => {
    return new Promise((resolve, reject) => {
        exec(`netstat -e`, { encoding: 'binary' }, function(err, stdout, stderr) {
            if (err){
              reject(err);
              return
            } 

            const info = preventChineseConfused(stdout)

            const infoList = info.split('\n')
            const needInfoRow = infoList[4]
            const needInfoRowList = needInfoRow.split(' ')
            let receive = 0
            let send = 0
            const filterNeedInfoRowList = needInfoRowList.filter(el => Number(el) && el !== '')
            receive = filterNeedInfoRowList[0]
            send = filterNeedInfoRowList[1].replace('\r', '')

            // const res = ['RECEIVE:0 Kb/s', 'SEND:0 Kb/s']
            const res = {
                receive: '0 Kb/s',
                send: '0 Kb/s'
            }
            if (preReceive === 0) {
                preReceive = receive
                preSend = send
                resolve(res)
                return
            }
            const receiveRate = (receive - preReceive) / 1024
            const sendRate = (send - preSend) / 1024

            // res[0] = `RECEIVE:${receiveRate > 1024 ? Math.floor(receiveRate / 1024) : Math.floor(receiveRate)} ${receiveRate > 1024 ? 'Mb/s' : 'Kb/s'}`
            // res[1] = `SEND:${sendRate > 1024 ? Math.floor(sendRate / 1024) : Math.floor(sendRate)} ${sendRate > 1024 ? 'Mb/s' : 'Kb/s'}`
            res.download = Math.floor(receiveRate)
            res.upload = Math.floor(sendRate)
            preReceive = receive
            preSend = send
            resolve(res)
        });
    })
}

module.exports = calculateNetRate