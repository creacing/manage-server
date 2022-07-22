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