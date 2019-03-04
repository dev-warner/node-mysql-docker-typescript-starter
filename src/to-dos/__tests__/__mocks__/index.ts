import db from "../../../db";

const createItem = async (message) => {
    const todo = await db.Todo.create({message});
    return todo;
};

export { createItem };
