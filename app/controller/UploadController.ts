import { Context } from "koa";
import fs from "fs";
import response from "../../utils/response";
import path from "path";

class UploadController {
  upload = (ctx: Context) => {
    const typeSet = new Set([
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif ",
    ]);

    const file = ctx.request.files?.file;

    if (!file) return response.error(ctx, "文件不可以为空");

    //@ts-ignore
    const fileType = file.mimetype;
    if (!typeSet.has(fileType)) return response.error(ctx, "非法的文件上传");

    // @ts-ignore
    const reader = fs.createReadStream(file.filepath);
    // @ts-ignore
    const ext = path.extname(file.originalFilename);
    const filepath = `/upload/${this.randomStr(12)}${ext}`;
    const writer = fs.createWriteStream(`statics` + filepath);

    reader.pipe(writer);
    response.success(ctx, { file: filepath });
  };
  randomStr(length: number): string {
    const seeder =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let randomStr = "";
    for (let i = 0; i < length; i++) {
      randomStr += seeder.charAt(Math.floor(Math.random() * seeder.length));
    }

    return randomStr;
  }
}

export default new UploadController();
