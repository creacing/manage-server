const { exec,execFile } = require('child_process');

const getTasklist = () => {
      return new Promise((resolve,reject)=>{
        execFile('tasklist',(error,stdout,stderr)=>{
          console.log(error);
          if(error) reject(error)

          resolve(stdout)
        })
      })
    }


const  test = async () =>{
  const res = await getTasklist()
}
test()