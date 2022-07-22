const { execFile, exec } = require('child_process');

class Tasklist {
    constructor() {
        this.tasklist = []
    }

    getTasklist(){
      return new Promise((resolve,reject)=>{
        exec('tasklist',(error,stdout,stderr)=>{
          if(error) reject(error)

          resolve(stdout)
        })
      })
    }
}

module.exports = new Tasklist()

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