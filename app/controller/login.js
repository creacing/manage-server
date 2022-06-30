'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async getUserInfo() {
    const userinfo = this.ctx.request.body;
    console.log('userinfo is',userinfo);
    // const pageInfo = this.ctx.request.query;
    // const _posts = await this.service.posts.getPosts(pageInfo);
    // this.ctx.body = _posts;
  }
}

module.exports = LoginController;