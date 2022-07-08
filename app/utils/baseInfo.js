//使用cmd 命令 https://github.com/RIAEvangelist/node-cmd
const CMD = require('node-cmd');
const os = require('os-utils');
class ServerInfo {
  constructor(){
    this.getPlatform = this.getPlatform()
    this.cpuUsage = ''
    this.freeMem = ''
    this.totalMem = ''
    this.sysUptime = ''
  }
  //获取平台
  getPlatform(){
    return os.platform();
  }
  //获取cpu 数量
  getCountCPUs(){
    return os.countCPUs()
  }
  //获取空闲内存
  getFreeMem(){
    return os.freemem()
  }
  //获取所有内存
  getTotalMem(){
    return os.totalmem()
  }
  //获取系统cpu利用率
  async getCPUUsage() {
    let promise = new Promise((resolve, reject) => {
      os.cpuUsage(function(v){
        resolve(v)
      });
    });
    
    return await promise
  }
  //获取系统已运行的毫秒数
  getSysUptime(){
    return os.sysUptime();
  }

  async getServerInfo(){
    this.cpuUsage = await this.getCPUUsage()
    this.freeMem = this.getFreeMem()
    this.totalMem = this.getTotalMem()
    this.sysUptime = this.getSysUptime()
  }
}

module.exports =  new ServerInfo()

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