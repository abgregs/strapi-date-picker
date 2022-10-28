'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('date-picker')
      .service('myService')
      .getWelcomeMessage();
  },
});
