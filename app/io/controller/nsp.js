'use strict'
const { Controller } = require('egg')
class NspController extends Controller {
    async index() {
        const { ctx, app } = this;
        const message = ctx.args[0];
        await ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
    }
}
module.exports = NspController;
