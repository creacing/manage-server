"use strict";
const Service = require("egg").Service;
const downloadExcel = require('./../utils/downloadExcel.js')

class PostsService extends Service {
    async getPosts(req) {
        let _posts = "";       
        // 查询全部article的title
        if (Object.keys(req).length === 0) {
            const titles = {}
            _posts = await this.app.mysql.query(
                `SELECT * FROM Posts;`
            );
            for (const article of _posts) {
                if (!titles[article.category]) {
                    titles[article.category] = []
                }
                titles[article.category].push(article.title)
            }
            return {
                code: '20000',
                msg: 'success query article',
                data: titles,
            };
        }
        //具名查询
        if (req.articleTitle) {
            const articleTitle = req.articleTitle;
            _posts = await this.app.mysql.query(
                `SELECT * FROM Posts where title = '${articleTitle}' ;`
            );
            return {
                code: '20000',
                msg: 'success query article',
                data: _posts,
            };
        }
        //模糊查询
        if (req.keywords && req.keywords !== "") {
            const keywords = req.keywords;
            _posts = await this.app.mysql.query(
                `SELECT * FROM Posts where title REGEXP '${keywords}' ;`
            );

            _posts = _posts.map((post) => {
                return post.title;
            });

            return {
                code: "20000",
                msg: "success query search",
                data: _posts,
            };
        }
        //分页查询
        const { currentPage, pageValue } = req;
        // await app.mysql.query(sql, values); // 单实例可以直接通过 app.mysql 访问
        _posts = await this.app.mysql.query(
            `select * from Posts limit ${currentPage * pageValue},${pageValue}`
        );
        // mongo
        // _posts = this.ctx.model.Posts.find({});

        return {
            code: "20000",
            msg: "success query page",
            data: _posts,
        };
    }

    async setPost(post) {
      const {app,ctx} = this
      const isExist = await app.mysql.get("Posts", { title: post.title });

      if (isExist) {
          return {
              code: "20001",
              msg: "exist",
          };
      }
      // mysql
      const insertResponse = await app.mysql.insert("Posts", post);
      // mongo
      // ctx.model.Posts.create(post);
      if (insertResponse.insertId) {
          return {
              code: "20000",
              msg: "success",
          };
      }
      return {
          code: "20001",
          msg: "failed",
      };
    }

    async downloadPosts() {
      const {app,ctx} = this
      const posts = await app.mysql.query(`SELECT * FROM Posts;`);
      const output = downloadExcel('posts.xls',posts)
      ctx.attachment('posts.xls') //等于 ctx.set('Content-Disposition', "attachment;filename*=UTF-8' '" + 'posts.xlsx');
      ctx.set('Content-Type','application/vnd.openxmlformats');
      return output
    }

    async uploadPosts() {
      const {app,ctx} = this

    }
    async updatePost(){
      const {app,ctx} = this

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
//   category: 'demo'
// };

// sql语句
// show databases;
// use test;
// show tables;
// describe Posts
// create table Posts (id int primary key auto_increment, title varchar(256), description varchar(256), tags varchar(256),  date varchar(256),  content varchar(256));