'use strict';

const Controller = require('egg').Controller;

class PostsController extends Controller {
  async getPosts() {
    const pageInfo = this.ctx.request.query;
    const _posts = await this.service.posts.getPosts(pageInfo);
    this.ctx.body = _posts;
  }
  async setPost() {
    const _post = this.ctx.request.body;
    const res = await this.service.posts.setPost(_post);
    this.ctx.body = res;
  }
}

module.exports = PostsController;
