"use strict";
const { Controller } = require("egg");
const serverInfo = require('./../../utils/baseInfo.js')
class ServerInfoController extends Controller {
    async index() {
      setInterval(async()=>{
        await serverInfo.getServerInfo()
        await ctx.socket.emit("data",JSON.parse(JSON.stringify(serverInfo)));
      },3000)
      const { ctx, app } = this;
      console.log('serverInfo');
    }
}
module.exports = ServerInfoController;