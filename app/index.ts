import dotenv from "dotenv";
dotenv.config();
import db from "./db";
db();
import Koa from "koa";
import router from "./router";
import { Server } from "http";
import AccessLogMiddleware from "./middleware/AccessLogMiddleware";
import koaBody from "koa-body";
const app = new Koa();

app
  .use(
    koaBody({
      multipart: true,
      formidable: {
        maxFileSize: 200 * 1024 * 1024,
      },
    })
  )
  .use(AccessLogMiddleware)
  .use(router.routes());

const run = (port: any): Server => {
  return app.listen(port);
};

export default run;
