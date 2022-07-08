"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
    async getUsersInfo() {
        const res = []
        const usersInfo = await this.app.redis.hgetall("usersInfo");
        for(const user in usersInfo){
          const userInfo = usersInfo[user]
          const formatUserInfo = {
            name: user,
            // date: userInfo?.date ?? ''
            registerDate: new Date().getTime(),
            phone: '12345678901',
            lastModifyDate:new Date().getTime(),
            level:'normal',
            ip:'ip地址'
            // { label: "Name", prop: "name" },
            // { label: "RegisterDate", prop: "registerDate" },
            // { label: "Phone", prop: "phone" },
            // { label: "LastModifyDate", prop: "lastModifyDate" },
            // { label: "Level", prop: "level" },
            // { label: "Ip", prop: "ip" },
          }
          res.push(formatUserInfo)
        }
        this.ctx.body = {
          code: 20000,
          data: res,
          msg: 'suc'
        };
    }
    
}

module.exports = UserController;