const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`middleware 1`);
  await next();
});

app.use(async (ctx, next) => {
  console.log(`middleware 2`);
  // blocking
  if (process.env.BLOCKING) await require("./sleep")(5000, next);
  // non blocking
  if (!process.env.BLOCKING) await setTimeout(next, 5000);
});

app.use(async (ctx, next) => {
  console.log(`middleware 3`);
  await next();
});

/**
 * Koa '/' GET route
 */
app.use(async ctx => {
  ctx.body = "Hello Koa";
});

module.exports = app;
