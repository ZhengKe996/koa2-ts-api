import koaRouter from "koa-router";
import AdminController from "../controller/AdminController";
import IndexController from "../controller/IndexController";
import LoginController from "../controller/LoginController";
import UploadController from "../controller/UploadController";
import AuthMiddleware from "../middleware/AuthMiddleware";

const router = new koaRouter({ prefix: "/admin" });
router.post("/login", LoginController.index);
router.post("/upload", UploadController.upload);
router.get("/adminlist", AdminController.getAdminList);
router.post("/admin", AdminController.addAdmin);
router.put("/admin/:id", AdminController.editAdmin);
router.use(AuthMiddleware);
router.get("/", IndexController.index);

export default router;
