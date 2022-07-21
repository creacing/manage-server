const fs = require('fs')
const path = require('path')
function fileSplit(inputFile, splitSize, outPath, extension) {
  //输入文件 拆分大小 输出路径 拓展名
  let i = 0
  function copy(start, end, size) {
    return new Promise((resolve, reject) => {
      if (start >= size) {
        resolve('FINISH')
      } else {
        if (end > size - 1) { 
          end = size - 1 
        }
        const readStream = fs.createReadStream(inputFile, { start, end })
        let data = Buffer.from([])
        readStream.on('data', chunk => {
          data = Buffer.concat([data, chunk])
        })
        readStream.on('end', async () => {
          fs.writeFile(path.join(outPath, `split${i + 1}${extension}`), data, async err => {
            if (err) { 
              reject(err) 
            }
            i++
            start = end + 1
            end = end + splitSize
            await copy(start, end, size)
            resolve()
          })
        })
        readStream.on('err', err => {
          reject(err)
        })
      }
    })
  }
  return new Promise((resolve, reject) => {
    //读取文件的状态；如果要检查一个文件是否存在且不操作它，推荐使用 fs.access()。
    return fs.stat(inputFile, async (err, stat) => {
      if (err) { 
        return reject(err) 
      }
      const size = stat.size
      await copy(0, splitSize - 1, size)
      resolve(`SPLIT FILES NUM ${i}`)
    })
  })
}


fileSplit(path.join(__dirname, './demo.md'), 1024*1024, __dirname, 'txt').then(i => {    
  console.log(i)
}).catch(err => {
  console.log(err)
})