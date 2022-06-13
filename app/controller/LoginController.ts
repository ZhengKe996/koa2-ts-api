import { Context } from "koa";
import { sign } from "../../utils/auth";
import response from "../../utils/response";
import AdminService from "../service/AdminService";

class LoginController {
  async index(ctx: Context) {
    const admin = await AdminService.getAdminById(1);
    console.log(admin);
    if (admin === null) return response.error(ctx, "管理员不存在", []);
    const token = sign(admin);
    response.success(ctx, { token: token });
  }
}

export default new LoginController();
