'use strict';
//在每一个客户端连接或者退出时发生作用，故而我们通常在这一步进行授权认证，对认证失败的客户端做出相应的处理
module.exports = app => {
  return async (ctx, next) => {
    // ctx.socket.emit('res', 'client has connected!');
    await next();
    //dis connect 的时候会走到这里
    //从redis 删除socket 解绑user id 和socket
    console.log('disconnection!');
  };
};
