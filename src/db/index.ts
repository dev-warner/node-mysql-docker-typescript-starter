import Sequelize from "sequelize";
import { todoFactory } from "./models";

const connection = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_ROOT_PASSWORD, {
  dialect: "mysql",
  host: process.env.DB_DOCKER_HOST,
  pool: {
    idle: 10000,
    max: 5,
    min: 0,
  },
  port: Number(process.env.MYSQL_PORT),
});

const db = {
  Sequelize,
  Todo: todoFactory(connection),
  connection,
};

Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db);
  }
});

const attachDatabaseToApplication = (req, _, next) => {
  req.db = db;
  next();
};

export { db, attachDatabaseToApplication };
export default db;
