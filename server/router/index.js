const KoaRouter = require('koa-router')

const apiRouter = KoaRouter({
  prefix: '/api'
})

module.exports = [apiRouter.routes()];
