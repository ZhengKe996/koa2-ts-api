import { Context } from "koa";
import { sign } from "../../utils/auth";
import AdminService from "../service/AdminService";

class LoginController {
  async index(ctx: Context) {
    const admin = await AdminService.getAdmin();
    const token = sign(admin);
    ctx.body = {
      token: token,
    };
  }
}

export default new LoginController();
