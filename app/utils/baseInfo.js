//使用cmd 命令 https://github.com/RIAEvangelist/node-cmd
const CMD = require('node-cmd');
const os = require('os-utils');
const diskinfo = require('diskinfo');
const calculateNetRate = require('./calculateNetRate.js')

//原生模块
const baseos = require("os")
class ServerInfo {
    constructor() {
        this.plantForm = this.getPlatform()
        this.cpuUsage = ''
        this.freeMem = ''
        this.totalMem = ''
        this.sysUptime = ''
        this.currentDisk = ''
        this.diskinfo = {}
    }

    //获取当前文件路径
    getCurrentFilePath() {
        //当前盘符
        const current_path = __dirname
        const current_disk = current_path.slice(0, 2).toLowerCase();
        return current_disk
    }

    async getAllDiskinfo() {
        //获得所有磁盘空间
        const promise = new Promise((resolve, reject) => {
            diskinfo.getDrives(function(err, aDrives) {
                if (err) {
                    reject('getAllDiskinfo is:' + err);
                    return
                }
                const res = {}
                    //遍历所有磁盘信息
                for (let i = 0; i < aDrives.length; i++) {
                    if (!res[aDrives[i].mounted]) {
                        const temp = {
                            //盘符号
                            mounted: aDrives[i].mounted,
                            //总量
                            total: (aDrives[i].blocks / 1024 / 1024 / 1024).toFixed(0) + "GB",
                            //已使用
                            used: (aDrives[i].used / 1024 / 1024 / 1024).toFixed(0) + "GB",
                            //可用
                            available: (aDrives[i].available / 1024 / 1024 / 1024).toFixed(0) + "GB",
                            //使用率
                            capacity: aDrives[i].capacity
                        }
                        res[aDrives[i].mounted] = temp
                    }
                }
                resolve(res)
            });
        })

        return await promise

    }

    //获取平台
    getPlatform() {
        return os.platform();
    }

    //获取cpu 数量
    getCountCPUs() {
        return os.countCPUs()
    }

    //获取空闲内存
    getFreeMem() {
        return parseInt(os.freemem())
    }

    //获取所有内存
    getTotalMem() {
        return parseInt(os.totalmem())
    }

    //获取系统cpu利用率
    async getCPUUsage() {
        let promise = new Promise((resolve, reject) => {
            os.cpuUsage(function(v) {
                resolve(Number(v.toFixed(2)))
            });
        });

        return await promise
    }

    //获取系统已运行的毫秒数
    getSysUptime() {
        return os.sysUptime();
    }

    async getServerInfo() {
        this.currentDisk = this.getCurrentFilePath()
        this.cpuUsage = await this.getCPUUsage()
        this.freeMem = this.getFreeMem()
        this.totalMem = this.getTotalMem()
        this.sysUptime = this.getSysUptime()
        this.cpuUsage = await this.getCPUUsage()
        this.diskinfo = await this.getAllDiskinfo()
        this.netInfo = await calculateNetRate()

    }
}

module.exports = new ServerInfo()

// const processRef = CMD.run('node -v')

// //listen to the python terminal output
// processRef.stdout.on(
//   'data',
//   function(data) {
//     console.log('data',data);
//   }
// );

// /**
//  * 获取系统gpu(nvidia)利用率
//  */
// async function getGPUUsage() {
// 	let promise = new Promise(resolve => {
// 		CMD.get('nvidia-smi -q -d UTILIZATION', (e, b, c) => {
// 			if (!e) {
// 				let a = b.split('\r\n').find(s => s.indexOf('Gpu') >= 0 && s.indexOf('%') >= 0)
// 				let start = a.indexOf(':')+2
// 				let end = a.indexOf('%')-1
// 				let ss = a.substring(start, end)
// 				resolve(ss)
// 			}
// 		})
// 	})
// 	serverInfo.gpuUsage = await promise
// }