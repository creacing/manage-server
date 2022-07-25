const Service = require("egg").Service;
const { exec } = require('child_process');
const preventChineseConfused = require('./../utils/preventChineseConfused.js')
class PostsService extends Service {
  
  async handleCommend(req){
    const commend = req.commend
    const {ctx,app} = this
    const getResult=(commend)=>{
      return new Promise((resolve,reject)=>{
        exec(commend,(err,stdout,stderr)=>{
          if(err){
            reject(err)
            return
          }
          resolve(stdout)
        })
      })
    }

    const res = await getResult(commend)
    console.log(res);
  }
}