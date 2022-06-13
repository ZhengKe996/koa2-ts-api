import { Context, Next } from "koa";
import { verify } from "../../utils/auth";

function AuthMiddleware(ctx: Context, next: Next) {
  const token = ctx.headers["authorization"];
  let error;

  if (token !== undefined && token !== "") {
    error = verify(token).error;
    if (error == null) return next();
  }

  ctx.body = {
    msg: error ? error.message : "authorization 不可以为空",
    code: 4000,
  };
  return;
}

export default AuthMiddleware;
