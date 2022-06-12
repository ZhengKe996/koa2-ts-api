import run from "../app";
import request from "supertest";
import { Server } from "http";

describe("network", () => {
  let server: Server;
  beforeAll(() => {
    server = run(8888);
  });
  it("GET /admin", () => {
    return request(server)
      .get("/admin")
      .expect(200)
      .then((response) => {
        expect(response.body.length).toEqual(6);
        expect(response.body).toStrictEqual([1, 2, 3, 4, 5, 6]);
      });
  });

  afterAll(() => {
    server.close();
  });
});
