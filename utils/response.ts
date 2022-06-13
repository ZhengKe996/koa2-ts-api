import { Context } from "koa";

/**
 *
 * @param ctx ctx
 * @param data 扩展提示
 * @param msg 错误提示
 * @param code 状态码
 */
function success(
  ctx: Context,
  data = {},
  msg: string = "success",
  code: number = 0
) {
  ctx.body = {
    code,
    msg,
    data,
  };
}

/**
 *
 * @param ctx ctx
 * @param data 返回的数据
 * @param msg 提示信息
 * @param code 状态码
 */
function error(
  ctx: Context,
  msg: string = "error",
  data = {},
  code: number = 1
) {
  ctx.body = {
    code,
    msg,
    data,
  };
}

export default { success, error };
