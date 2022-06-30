"use strict";

const Controller = require("egg").Controller;

class LoginController extends Controller {
    async getUserInfo() {
        const userinfo = this.ctx.request.body;
        const { username, password } = userinfo;
        const hasUser = await this.app.redis.hget("usersInfo", username);
        if (!hasUser) {
            const { username, password } = userinfo;
            await this.app.redis.hset("usersInfo", username, password);
        }
        console.log("hasUser", hasUser);
        this.ctx.body = "_posts";
    }
    async registerUser() {
        const userinfo = this.ctx.request.body;

        this.ctx.body = "register back";
    }
}

module.exports = LoginController;