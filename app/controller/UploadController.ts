import { Context } from "koa";
import fs from "fs";
import response from "../../utils/response";
import path from "path";

class UploadController {
  index(ctx: Context) {}
  upload = (ctx: Context) => {
    const file = ctx.request.files?.file;
    if (file) {
      // @ts-ignore
      const reader = fs.createReadStream(file.filepath);
      // @ts-ignore
      const ext = path.extname(file.originalFilename);
      const filepath = `/upload/${this.randomStr(12)}${ext}`;
      const writer = fs.createWriteStream(`statics` + filepath);
      reader.pipe(writer);
      response.success(ctx, { file: filepath });
    } else {
      response.error(ctx, "文件不可以为空");
    }
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
