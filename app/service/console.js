const Service = require("egg").Service;
const { exec } = require('child_process');
const preventChineseConfused = require('./../utils/preventChineseConfused.js')
class ConsoleService extends Service {
  
  async handleCommend(req){
    const commend = req.commend
    const {ctx,app} = this
    const getResult=(commend)=>{
      return new Promise((resolve,reject)=>{
        exec(commend,{ encoding: 'binary' },(err,stdout,stderr)=>{
          if(err){
            reject(err)
            return
          }
          resolve(preventChineseConfused(stdout))
        })
      })
    }

    const res = await getResult(commend)
    // console.log(res);
    return {
      code: '20000',
      msg: 'success query article',
      data: res,
    };
  }
}

module.exports = ConsoleService;
