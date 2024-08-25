const makeCoffee = require('@acme/example-old');
const { loadAnime } = require('@acme/example-ts');
const { printToday } = require('@acme/example-new');
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  const anime = await loadAnime();
  console.log(anime);
  console.log(makeCoffee());
  ctx.body = 'Hello World ' + printToday();
});

app.listen(3000);
