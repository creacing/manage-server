"use strict";
const { Controller } = require("egg");
class NspController extends Controller {
    async index() {
        //业务逻辑
        const { ctx, app } = this;
        //获取用户信息
        //检查token 是否正确
        const token = ctx.socket.handshake.query.usekey;
        const userInfo = app.jwt.verify(token);
        //检查用户名密码
        const { username, password } = userInfo;
        const queryPassword = await app.redis.hget("usersInfo", username);
        if (queryPassword === password) {
            //用户验证成功 //获取用户发送的数据
            const chatInfo = ctx.args[0];
            //保存用户发送的数据
            // await app.redis.lpush('chatInfos',JSON.stringify({...chatInfo,username}))
            const namespace = app.io.of("/");
            // 广播
            namespace.emit("data", {...chatInfo, username });
            // const sockets = Object.keys(namespace.sockets)
            console.log('current sockets', Object.keys(namespace.sockets));
            // for(const socket of sockets){
            //   namespace.sockets[socket].emit('res', {...chatInfo,username});
            // }

            await ctx.socket.emit("res", `message has already send`);
        }
    }
}

module.exports = NspController;