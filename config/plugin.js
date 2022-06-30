'use strict';
// 开启插件
/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 启用跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // 启用mongodb
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  //启用mysql
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  //启用socket
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
  //启用redis
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  //启用jwt
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};
