const Koa = require('koa');
const koaBodyparser = require('koa-bodyparser');
const Router = require('koa-router');

const api = require('./api');

const app = new Koa();
const router = new Router();

//라우터 설정
router.use('/api', api.routes());

//라우터 적용 전에 bodyParser 적용
app.use(koaBodyparser());

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
