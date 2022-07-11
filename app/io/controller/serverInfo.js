"use strict";
const { Controller } = require("egg");
const serverInfo = require('./../../utils/baseInfo.js')
class ServerInfoController extends Controller {
    async index() {
      setInterval(async()=>{
        const date = new Date()
        const formatDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        // const formatDate = `${date.getFullYear()}${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`
        await serverInfo.getServerInfo()
        serverInfo.date = formatDate
        await ctx.socket.emit("data",JSON.parse(JSON.stringify(serverInfo)));
      },3000)
      const { ctx, app } = this;
      console.log('serverInfo');
    }
}
module.exports = ServerInfoController;