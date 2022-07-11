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
    config.axiosPlus = {
        // can set more config in headers,like token,references and so on
        headers: {
            common: {
                'Content-Type': 'application/json; charset=UTF-8',
                // 添加认证【例如】，也可以在请求拦截器中修改具体的request config
                // 'Authorization':'19980115_520' // 不要问我19980115是什么，当然是女朋友生日呀！！！
            },
            // 可以设置请求头等属性
        },
        // 定义请求拦截器处理方法【可选】
        // requestInterceptorsHandler: config => {
        //   // 请求之前的配置信息
        //   // 当该字段【函数】不存在是，默认如下：
        //   app.coreLogger.debug(`[egg-axios-plus] send request, baseURL: ${JSON.stringify(config.baseURL)}, url: ${config.url}, method: ${config.method}, data: ${JSON.stringify(config.data)}, headers: ${JSON.stringify(config.headers)}`);
        //   return config;
        // },
        // requestInterceptorsErrorHandler: error => {
        //   // 请求之后发生的错误信息
        //   // 当该字段【函数】不存在是，默认如下：
        //   app.coreLogger.error(`[egg-axios-plus] send request error, ${error.message}`);
        //   return Promise.reject(error);
        // },
        // // 定义axios响应拦截器处理方法【可选】
        // responseInterceptorsHandler: response => {
        //   // response 响应结果
        //   // 当该字段【函数】不存在是，默认如下：
        //   app.coreLogger.debug(`[egg-axios-plus] receive response, data: ${JSON.stringify(response.data)}, status: ${response.status}, headers: ${JSON.stringify(response.headers)}`);
        //   if (response.config && (response.config.method.toUpperCase() === 'HEAD' || response.config.method.toUpperCase() === 'options')) {
        //     return response;
        //   }
        //   return response.data;
        // },
        // responseInterceptorsErrorHandler: error => {
        //   // 接口响应失败的错误结果
        //   // 当该字段【函数】不存在是，默认如下：
        //   app.coreLogger.error(`[egg-axios-plus] receive response error, ${error.message}`);
        //   return Promise.reject(error);
        // },
        timeout: 5000, // 默认请求超时
        app: true, // 在app.js上启动加载
        agent: false, // 在agent.js上启动加载
    }

    config.io = {
        init: {}, // passed to engine.io
        namespace: {
            "/": {
                connectionMiddleware: ["connection"],
                packetMiddleware: ["packet"],
            },
            "/server": {
                connectionMiddleware: ["connection"],
                packetMiddleware: ["packet"],
            }
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