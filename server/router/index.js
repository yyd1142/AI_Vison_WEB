const KoaRouter = require('koa-router');
const RegionsDBAction = require('../database/RegionsDBAction');
const StoresDBAction = require('../database/StoresDBAction');

const regionsDBAction = new RegionsDBAction();
const storesDBAction = new StoresDBAction();
const apiRouter = KoaRouter({
  prefix: '/api'
})

apiRouter.get('/regionsAll', async (ctx, next) => {
  const response = await regionsDBAction.getAllRegions();
  ctx.body = { code: 0, datas: response };
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
  ctx.body = { code: 0, data: response_ };
});

apiRouter.get('/regions/people-counts/all', async (ctx, next) => {
  const range = ctx.query.range;
  const groupby = ctx.query.groupby;
  const response = await regionsDBAction.getAllPeoPleCount(range, groupby);
  if (response.length <= 0) {
    ctx.body = { code: 0, datas: [] };
  } else {
    ctx.body = { code: 0, datas: response };
  }
});

apiRouter.get('/storesAll', async (ctx, next) => {
  const id = ctx.query.id;
  const response = await storesDBAction.getAllStore(id);
  if (response.length <= 0) {
    ctx.body = { code: 0, datas: [] };
  } else {
    ctx.body = { code: 0, datas: response };
  }
});

apiRouter.get('/stores/people-counts', async (ctx, next) => {
  const id = ctx.query.id;
  const sid = ctx.query.sid;
  const range = ctx.query.range;
  const groupby = ctx.query.groupby;
  const response = await storesDBAction.getPeoPleCountByStoreInRegion(id, sid, range, groupby);
  let response_ = {
    ...response,
    counts: (response.peopleCounts && response.peopleCounts.length > 0) ? response.peopleCounts.length : 0
  }
  ctx.body = { code: 0, data: response_ };
});

apiRouter.get('/stores/people-counts/all', async (ctx, next) => {
  const id = ctx.query.id;
  const range = ctx.query.range;
  const groupby = ctx.query.groupby;
  const response = await storesDBAction.getAllPeoPleCountInRegion(id, range, groupby);
  if (response.length <= 0) {
    ctx.body = { code: 0, datas: [] };
  } else {
    ctx.body = { code: 0, datas: response };
  }
});

module.exports = [apiRouter.routes()];
