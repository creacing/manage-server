"use strict";
const Controller = require("egg").Controller;

class ConsoleController extends Controller {
    async getConsole() {
      const req = this.ctx.request.body;
      const res = await this.service.console.handleCommend(req);
      this.ctx.body = res;
    }
    
}

module.exports = ConsoleController;