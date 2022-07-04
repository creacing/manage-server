/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1655867780517_4749";

    // add your middleware config here
    config.middleware = [];

    config.cors = {
        origin: "*",
        allowMethods: "GET,POST",
    };
    // 跨域安全认证
    config.security = {
        csrf: {
            enable: false,
            // ignore: ctx => {
            //   if(ctx.request.url === `/${config.adminPath}/pr`){

            //   }
            // }
        },
    };
    // mongodb支持
    // config.mongoose = {
    //     url: "mongodb://127.0.0.1:27017/qydxyx",
    //     options: {
    //         poolSize: 40,
    //     },
    // };
    // mySql 支持
    // config.mysql = {
    //     client: {
    //         // host
    //         host: "127.0.0.1",
    //         // 端口号
    //         port: "3306",
    //         // 用户名
    //         user: "root",
    //         // 密码
    //         password: "root",
    //         // 数据库名
    //         database: "test",
    //     },
    //     // 是否加载到 app 上，默认开启
    //     app: true,
    //     // 是否加载到 agent 上，默认关闭
    //     agent: false,
    // };
    config.io = {
        init: {}, // passed to engine.io
        namespace: {
            "/": {
                connectionMiddleware: ["connection"],
                packetMiddleware: ["packet"],
            },
        },
    };

    (config.redis = {
        client: {
            port: 6379, // Redis port
            host: "127.0.0.1", // Redis host
            password: "auth",
            db: 0,
        },
    }),
    (config.jwt = {
        secret: "creazing", // 自定义token加密条件字符串
        expiresIn: "1h",
    });

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};