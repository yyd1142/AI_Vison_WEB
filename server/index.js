global.CONFIG = require('./config');
const winston = require('winston');
var transports = [];
transports.push(new (winston.transports.File)({
  filename: 'output.log',
  level: 'info'
}));
// 目前暂时将日志输出至Console，后期生产环境中建议移除
transports.push(new (winston.transports.Console)({
  level: 'info'
}));
global.LOGGER = new (winston.Logger)({
  transports: transports
});
global.DEBUG = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

if (!DEBUG) {
  winston.handleExceptions(new winston.transports.File({ filename: 'error.log' }))
}

const Koa = require('koa')
const cors = require('kcors')
const KoaBodyparser = require('koa-bodyparser')
const KoaOnerror = require('koa-onerror')
const { Nuxt, Builder } = require('nuxt')
const myRouters = require('./router')
const KoaCompose = require('koa-compose')

async function start () {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  // const host = '192.168.3.145'
  const port = process.env.PORT || 3000

  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(cors());
  app.use(KoaBodyparser());
  KoaOnerror(app);
  app.use(KoaCompose(myRouters));
  app.use(async (ctx, next) => {
    await next();
    var start = new Date();
    if (ctx.request.method == 'POST') {
      LOGGER.info(`POST Body: ${JSON.stringify(ctx.request.body)} Time: ${start}`);
    }
    var ms = new Date() - start;
    LOGGER.info(`${ctx.request.method} ${ctx.request.url} ${ms}ms Time: ${start}`);
  })
  app.use(async (ctx, next) => {
    await next()
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        if (promise === undefined)
          return;
        if ('then' in promise){
          promise.then(resolve).catch(reject)
        }
      })
    })
  })
  app.on('error', function(err){
    LOGGER.error(err);
  })
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

process.on('uncaughtException', function(err) {
  if (err.code != "ECONNRESET"){
    console.log(err.stack);
  }
});

start()
