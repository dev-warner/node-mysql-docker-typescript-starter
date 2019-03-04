import { expect } from "chai";
import request from "supertest";

import server from "../../server";

describe("/todos", () => {

  describe("post", () => {
    it("should beable to create a todo", (done) => {
      request(server)
        .post("/todos")
        .send({message: "hello"})
        .expect(200)
        .then((response) => {
          expect(response.body.id).to.exist("string");
          expect(response.body.message).to.equal("hello");
          expect(response.body.complete).to.equal(false);
          done();
        });
    });
  });

});
