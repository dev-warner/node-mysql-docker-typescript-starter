import { Router } from "express";

const router = Router();

router
  .get("/", async ({ db }, res) => {
    try {
      const todos = await db.Todo.findAll();
      res.send(todos);
    } catch (e) {
      res.status(403);
      res.send({error: true, message: e.message });
    }
  })
  .get("/:id", async (req, res) => {
    const { db: { Todo }} = req;

    try {
      const { id } = req.params;
      const todo = await Todo.findById(id);
      res.send(todo);
    } catch (e) {
      res.status(403);
      res.send({error: true, message: e.message });
    }
  })
  .post("/", async (req, res) => {
    const { db: { Todo }} = req;

    try {
      const todo = await Todo.create(req.body);
      res.send(todo);
    } catch (e) {
      res.status(403);
      res.send({error: true, message: e.message });
    }
  })
  .delete("/:id", async (req, res) => {
    try {
      const { db: { Todo }} = req;
      const { id } = req.params;
      const todo = await Todo.findById(id);
      await todo.destroy();
      res.send(200);
    } catch (e) {
      res.status(403);
      res.send({error: true, message: e.message });
    }
  })
  .patch("/complete/:id", async (req, res) => {
    try {
      const { db: { Todo }} = req;
      const { id } = req.params;
      const todo = await Todo.findById(id);
      const result = await todo.setAttributes("complete", !todo.complete).save();
      res.send(result);
    } catch (e) {
      res.status(403);
      res.send({error: true, message: e.message });
    }
  })
  .patch("/:id", async (req, res) => {
    try {
      const { db: { Todo }} = req;
      const { id } = req.params;
      const { message } = req.body;
      const todo = await Todo.findById(id);
      const result = await todo.setAttributes("message", message).save();
      res.send(result);
    } catch (e) {
      res.status(403);
      res.send({error: true, message: e.message });
    }
  });

export default router;
