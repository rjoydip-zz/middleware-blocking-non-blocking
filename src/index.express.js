const express = require("express");

const app = express();

/**
 * Express middlewares
 */
app.use(async (req, res, next) => {
  console.log("middlewares 1");
  await next();
});

app.use(async (req, res, next) => {
  console.log(`middleware 2`);
  // blocking
  if (process.env.BLOCKING) await require("./sleep")(5000, next);
  // non blocking
  if (!process.env.BLOCKING) await setTimeout(next, 5000);
});

app.use(async (req, res, next) => {
  console.log("middlewares 3");
  await next();
});

/**
 * Express '/' GET route
 */
app.get("/", (req, res) => {
  res.send("Hello express");
});

module.exports = app;
