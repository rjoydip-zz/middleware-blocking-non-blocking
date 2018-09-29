process.env.BLOCKING = process.env.BLOCKING || false;
const TEST = process.env.TEST || "koa";
const app =
  TEST === "koa" ? require("./index.koa") : require("./index.express");

// create a server object:
app.listen(8080); // the server object listens on port 8080
