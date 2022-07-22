'use strict';

const Controller = require('egg').Controller;

class PostsController extends Controller {
  async getPosts() {
    const req = this.ctx.request.query;
    const res = await this.service.posts.getPosts(req);
    this.ctx.body = res;
  }
  async setPost() {
    const req = this.ctx.request.body;
    const res = await this.service.posts.setPost(req);
    this.ctx.body = res;
  }
  async downloadPosts(){
    const req = this.ctx.request.query;
    const res = await this.service.posts.downloadPosts(req);
    this.ctx.body = res;
  }
  async uploadPosts(){
    const req = this.ctx.request.body;
    const res = await this.service.posts.uploadPosts(req);
    this.ctx.body = res;
  }
  async updatePost(){
    const req = this.ctx.request.body
    const res = await this.service.posts.updatePost(req);
    this.ctx.body = res;
  }
}

module.exports = PostsController;
