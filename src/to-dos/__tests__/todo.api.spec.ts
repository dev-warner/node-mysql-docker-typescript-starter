import request from "supertest";
import "../../db";
import server from "../../server";
import { createItem } from "./__mocks__";

describe("/todos", () => {
  describe("get", () => {
    test("get should return empty array if no items", () => {
      return request(server)
        .get("/todos")
        .expect(200)
        .then((response) => expect(response.body).toEqual([]));
    });

    test("should return 10 items if 10 items exist", () => {
      beforeEach(async () => {
        for (let i = 0; i < 10; i++) {
          await createItem(`this is the ${i}nth todo`);
        }
      });

      return request(server)
        .get("/todos")
        .expect(200)
        .then((response) => expect(response.body.length).toEqual(10));
    });
  });
  describe("post", async () => {
    test("should beable to create an item", () => {

      return request(server)
        .post(`/todos`)
        .send({message: "hello"})
        .expect(200)
        .then((response) => {
            expect(response.body.message).toEqual("hello");
        });
    });
  });

  describe("delete", () => {
    let result;
    beforeEach(async () => {
      result = await createItem("hello");
    });

    test("should beable to remove existing items", () => {
      return request(server)
        .delete(`/todos/${result.id}`)
        .expect(200);
    });
  });
});
