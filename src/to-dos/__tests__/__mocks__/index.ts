import request from "supertest";
import server from "../../../server";

export { createItem };

const createItem = async (message) => {

    const result = await request(server)
        .post("/todos")
        .send({ message })
        .expect(200)
        .then((response) => {
            expect(response.body.message).toEqual(message);
            expect(response.body.complete).toEqual(false);
            return response.body;
        });
    return result;
};
