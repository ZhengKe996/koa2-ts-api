import { Rules } from "async-validator";
import { createHash } from "crypto";
import { Context } from "koa";
import paginate from "../../utils/paginate";
import response from "../../utils/response";
import validate from "../../utils/validate";
import AdminService from "../service/AdminService";

class AdminController {
  async getAdminList(ctx: Context) {
    const usp = new URLSearchParams(ctx.querystring);
    let page = 1,
      limit = 15;

    if (usp.get("page") !== null && !isNaN(Number(usp.get("page"))))
      page = Number(usp.get("page"));
    if (usp.get("limit") !== null && !isNaN(Number(usp.get("limit"))))
      limit = Number(usp.get("limit"));

    const { rows, count } = await AdminService.getAdminAdminListByPage(
      page,
      limit
    );
    response.success(ctx, paginate(rows, page, count, limit));
  }

  async addAdmin(ctx: Context) {
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
        {
          type: "string",
          min: 6,
          max: 18,
          message: "密码长度在 6 - 18位之间",
        },
      ],
    };

    interface IAdmin {
      id: number;
      name: string;
      password: string;
    }
    const { data, error } = await validate<IAdmin>(ctx, rules);

    if (error !== null) return response.error(ctx, error);

    const admin = await AdminService.getAdminByName(data.name);
    if (admin !== null) return response.error(ctx, "该用户名已经存在");

    // md5 加密
    data.password = createHash("md5").update(data.password).digest("hex");

    const row = await AdminService.addAdmin(data);
    if (row.id > 0) return response.success(ctx);

    return response.error(ctx, "新增管理员失败");
  }
}

export default new AdminController();
