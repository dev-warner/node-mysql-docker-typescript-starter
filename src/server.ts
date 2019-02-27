import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { CORS_OPTIONS } from "./config";
import { attachDatabaseToApplication } from "./db";
import { healthCheck } from "./health-check";
import { ToDoRouter } from "./to-dos";

import "./db";

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors(CORS_OPTIONS));
app.use(helmet());

app.use(attachDatabaseToApplication);

app.use("/", healthCheck);
app.use("/todos", ToDoRouter);

export default app;

/*
    init database - done
    connect to database
    testing with a database tear down and set up
    learn how to mock auth tokens
    get linter/types working
    connect to a front end
*/
