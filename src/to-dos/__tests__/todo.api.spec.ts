// import request from "supertest";
// import server from "../../server";
// import { createItem } from "./__mocks__";

// describe("/todos", () => {

//   describe("get", () => {
//     test("get should return empty array if no items", async () => {
//       await request(server)
//         .get("/todos")
//         .expect(200)
//         .then((response) => expect(response.body).toEqual([]));
//     });

//     test("should return 10 items if 10 items exist", async () => {
//       for (let i = 0; i < 10; i++) {
//         await createItem(`this is the ${i}nth todo`);
//       }

//       await request(server)
//         .get("/todos")
//         .expect(200)
//         .then((response) => expect(response.body.length).toEqual(10));
//     });
//   });
//   describe("post", () => {
//     test("should beable to create an item", async () => {
//       await createItem("hello");
//     });
//   });

//   describe("delete", () => {
//     test("should beable to remove existing items", () => {
//       request(server)
//         .delete("/todos/1")
//         .expect(200)
//         .then((response) => {
//           expect(response.body.length).toEqual(1);
//           expect(response.body[0].id).toEqual("2");
//           expect(response.body[0].message).toEqual("this is the 2nth todo");
//         });
//     });
//   });

//   describe("patch", () => {
//     test("should beable to set a todo to completed", async () => {
//       request(server)
//         .patch("todos/complete/123")
//         .expect(200)
//         .then((response) => {
//           expect(response.body.complete).toEqual(true);
//         });
//     });

//     test("should beable to update/change message", async () => {
//       request(server)
//         .patch("todos/123")
//         .send({ message: "not hello" })
//         .expect(200)
//         .then((response) => {
//           expect(response.body.message).toEqual("not hello");
//         });
//     });
//   });
// });
