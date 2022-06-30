"use strict";
const Service = require("egg").Service;
class PostsService extends Service {
    async getPosts(pageInfo) {
        let _posts = "";
        // 查询文章
        // if (pageInfo.articleTitle) {
        //   const articleTitle = pageInfo.articleTitle;
        //   _posts = await this.app.mysql.query(
        //     `SELECT * FROM Posts where title = '${articleTitle}' ;`
        //   );
        //   return {
        //     code: '20000',
        //     msg: 'success query article',
        //     data: _posts,
        //   };
        // }

        // if (pageInfo.keywords && pageInfo.keywords !== "") {
        //     const keywords = pageInfo.keywords;
        //     _posts = await this.app.mysql.query(
        //         `SELECT * FROM Posts where title REGEXP '${keywords}' ;`
        //     );

        //     _posts = _posts.map((post) => {
        //         return post.title;
        //     });

        //     return {
        //         code: "20000",
        //         msg: "success query search",
        //         data: _posts,
        //     };
        // }

        // const { currentPage, pageValue } = pageInfo;
        // // await app.mysql.query(sql, values); // 单实例可以直接通过 app.mysql 访问
        // _posts = await this.app.mysql.query(
        //     `select * from Posts limit ${currentPage * pageValue},${pageValue}`
        // );
        // // mongo
        // // _posts = this.ctx.model.Posts.find({});

        // return {
        //     code: "20000",
        //     msg: "success query page",
        //     data: _posts,
        // };
    }

    async setPost(post) {
        const isExist = await this.app.mysql.get("Posts", { title: post.title });

        // if (isExist) {
        //     return {
        //         code: "20001",
        //         msg: "exist",
        //     };
        // }
        // // mysql
        // const res = await this.app.mysql.insert("Posts", post);
        // // mongo
        // // this.ctx.model.Posts.create(post);
        // if (res.insertId) {
        //     return {
        //         code: "20000",
        //         msg: "success",
        //     };
        // }
        // return {
        //     code: "20001",
        //     msg: "failed",
        // };
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