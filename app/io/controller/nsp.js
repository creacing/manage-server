"use strict";
const { Controller } = require("egg");
class NspController extends Controller {
    async index() {
        console.log("333333");

        const { ctx, app } = this;
        const message = ctx.args[0];

        // const socketId = ctx.socket.id
        // const socketIds = await app.redis.lrange('socketIds',0,-1)
        // if(!socketIds.includes(socketId)){
        //   console.log('socketIds is',socketId);
        //   await app.redis.lpush('socketIds',socketId)
        // }
        // //向指定id 发送数据
        // //app.io.sockets.connected[id].emit('res', 'send From app');
        // // console.log(app.redis.__proto__);
        // await ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
        console.log("444444");
    }
}
module.exports = NspController;