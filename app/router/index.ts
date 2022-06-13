import koaRouter from "koa-router";
import AdminController from "../controller/AdminController";
import IndexController from "../controller/indexController";
import LoginController from "../controller/LoginController";
import AuthMiddleware from "../middleware/AuthMiddleware";

const router = new koaRouter({ prefix: "/admin" });
router.get("/login", LoginController.index);
// router.use(AuthMiddleware);
router.get("/adminlist", AdminController.getAdminList);
router.get("/", IndexController.index);

export default router;
