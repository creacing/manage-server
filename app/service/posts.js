'use strict';
const Service = require('egg').Service;
class PostsService extends Service {
  async getPosts() {
    const _posts = this.ctx.model.Posts.find({});
    return _posts;
  }

  async setPost(post) {
    this.ctx.model.Posts.create(post);
    return true;
  }
}
module.exports = PostsService;
// demo post
// const post = {
//   title: 'demo',
//   description: 'demo',
//   tags: 'demo',
//   date: 'demo',
//   content: 'demo',
// };
