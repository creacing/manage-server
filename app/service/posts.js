'use strict';
const Service = require('egg').Service;
class PostsService extends Service {
  async getPosts() {
    // await app.mysql.query(sql, values); // 单实例可以直接通过 app.mysql 访问
    const _posts = await this.app.mysql.query(
      'select * from Posts'
    );
    // mongo
    // const _posts = this.ctx.model.Posts.find({});
    return _posts;
  }

  async setPost(post) {
    // mysql
    const res = await this.app.mysql.insert(
      'Posts', post
    );
    // mongo
    // this.ctx.model.Posts.create(post);
    return res;
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

// sql语句
// show databases;
// use test;
// show tables;
// describe Posts
// create table Posts (id int primary key auto_increment, title varchar(256), description varchar(256), tags varchar(256),  date varchar(256),  content varchar(256));
