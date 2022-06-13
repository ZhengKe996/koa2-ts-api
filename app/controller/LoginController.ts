import { Rules } from "async-validator";
import { Context } from "koa";
import { sign } from "../../utils/auth";
import response from "../../utils/response";
import validate from "../../utils/validate";
import AdminService from "../service/AdminService";

class LoginController {
  async index(ctx: Context) {
    const rules: Rules = {
      name: [
        {
          type: "string",
          required: true,
          message: "用户名不能为空",
        },
      ],
      password: [
        {
          type: "string",
          required: true,
          message: "密码不能为空",
        },
      ],
    };
    interface IAdmin {
      name: string;
      password: string;
    }
    const { data, error } = await validate<IAdmin>(ctx, rules);
    if (error !== null) return response.error(ctx, error);

    const admin = await AdminService.getAdminByName(data.name);

    if (admin === null) return response.error(ctx, "管理员不存在", []);
    const token = sign(admin);
    response.success(ctx, { token: token });
  }
}

export default new LoginController();
