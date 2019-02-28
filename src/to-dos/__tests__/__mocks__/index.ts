import db from "../../../db";
import { todoFactory } from "../../../db/models";

const Todo = todoFactory(db.connection);

const createItem = async (message) => {
    const todo = await Todo.create({message});
    return todo;
};

export { createItem };
