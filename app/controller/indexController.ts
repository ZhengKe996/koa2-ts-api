import { Context } from "koa";
import AdminService from "../service/AdminService";

class indexController {
  async index(ctx: Context) {
    const admin = await AdminService.getAdmin();
    ctx.body = admin;
  }
}

export default new indexController();
