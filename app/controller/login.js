"use strict";

const Controller = require("egg").Controller;

class LoginController extends Controller {
    async getUserInfo() {
        const userinfo = this.ctx.request.body;
        const { username } = userinfo;
        const hasUser = await this.app.redis.hget("usersInfo", username);
        if (!hasUser) {
          this.ctx.body = {
            code: 20000,
            msg: 'cant find this account please register first'
          }
          return
        }
        // 生成token
        const token = this.ctx.app.jwt.sign({
          ...this.ctx.request.body
        },this.app.config.jwt.secret,{expiresIn:this.app.config.jwt.expiresIn})
        this.ctx.body = {
          code: 20000,
          token,
          msg: 'suc'
        };
    }
    async registerUser() {
        const userinfo = this.ctx.request.body;
        const { username, password } = userinfo;
        const hasUser = await this.app.redis.hget("usersInfo", username);
        if (hasUser) {
          this.ctx.body =  {
            code: 20000,
            msg: 'already has account please go to login'
          }
          return
        }
        await this.app.redis.hset("usersInfo", username, password);
        this.ctx.body = {
          code: 20000,
          msg: 'suc'
        }
    }
    async loginOut(){
      this.ctx.body = {
        code: 20000,
        msg: 'suc'
      }
    }
}

module.exports = LoginController;