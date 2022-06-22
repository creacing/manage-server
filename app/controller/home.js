'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
    };
    this.ctx.body = dataList;
  }
}

module.exports = HomeController;
