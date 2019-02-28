import { Router } from "express";

const healthCheck = Router();

healthCheck.get("/", (_, res) => res.json({ status: "UP" }));

export default healthCheck;
