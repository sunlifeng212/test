const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const serve = require('koa-static');
const body = require('koa-body')
const path = require('path');
// 1.主页静态网页 把静态页统一放到public中管理
const home = serve(path.join(__dirname) + '/dist/');
// 2.hello接口
const hello = ctx => {
    ctx.response.body = 'Hello World';
};

// 3.分配路由
app.use(body({
    Multipart: true, //这里补充一点，如果不加multipart：true ctx.request.body会获取不到值
    Formidable: {
        maxFileSize: 20010241024
    }
}))
app.use(home);
app.use(route.get('/abc', hello));
app.listen(4000);
console.log("监听 4000 端口")