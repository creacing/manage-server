const xlsx = require('node-xlsx');
const fs = require('fs')
const path = require('path')

const downloadExcel = (sheetName,queryResults)=>{
  const output = [{
    name: sheetName,
    data: []
  }]
  output[0].data[0] = Object.keys(queryResults[0])
  for(const e of queryResults){
    output[0].data.push(Object.values(e))
  }
  const outputBuffer = xlsx.build(output);
  return outputBuffer
}
module.exports = downloadExcel
