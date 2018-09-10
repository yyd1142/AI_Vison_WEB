const KoaRouter = require('koa-router');
const RegionsDBAction = require('../database/RegionsDBAction');

const regionsDBAction = new RegionsDBAction();
const apiRouter = KoaRouter({
  prefix: '/api'
})

apiRouter.get('/regionsAll', async (ctx, next) => {
  const response = await regionsDBAction.getAllRegions();
  ctx.body = {code: 0, datas: response};
});

apiRouter.get('/regions/people-counts', async (ctx, next) => {
  const id = ctx.query.id;
  const range = ctx.query.range;
  const groupby = ctx.query.groupby;
  const response = await regionsDBAction.getPeoPleCountById(id, range, groupby);
  let response_ = {
    ...response,
    counts: (response.peopleCounts && response.peopleCounts.length > 0) ? response.peopleCounts.length : 0
  }
  ctx.body = {code: 0, data: response_};
});

module.exports = [apiRouter.routes()];
