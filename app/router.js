'use strict';
//路由负责将 socket 连接的不同 events 分发到对应的 controller，框架统一了其使用方式
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller, io } = app;
    //http router
    router.post('/login', controller.login.getUserInfo);
    router.get('/users', controller.user.getUsersInfo);
    router.post('/register', controller.login.registerUser);

    router.post('/upload_posts', controller.posts.uploadPosts);
    router.get('/download_posts', controller.posts.downloadPosts);
    router.get('/get_posts', controller.posts.getPosts);
    router.post('/set_post', controller.posts.setPost);
    router.post('/update_post', controller.posts.updatePost);
    router.get('/stocks', controller.stocks.getStocks);
    router.get('/get_comments', controller.comments.getComments)
    router.post('/get_console', controller.console.getConsole)
    // socket router ------------ socket.io

    io.of('/').route('index', io.controller.chat.index)
    io.of('/server').route('index', io.controller.serverInfo.index)
};