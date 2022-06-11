import { Context } from "koa";

class indexController {
  async index(ctx: Context) {
    ctx.body = [1, 2, 3, 4, 5, 6];
  }
}

export default new indexController();
