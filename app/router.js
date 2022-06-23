'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/get_posts', controller.posts.getPosts);
  router.post('/set_post', controller.posts.setPost);
};
