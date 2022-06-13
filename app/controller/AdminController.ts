import { Context } from "koa";
import paginate from "../../utils/paginate";
import response from "../../utils/response";
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
}

export default new AdminController();
