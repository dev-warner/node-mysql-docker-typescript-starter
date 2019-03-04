import Sequelize from "sequelize";
import todoFactory, { ITodoAtrributes, TodoInstance } from "./Todo";

const createModels = ({
  database,
  username,
  password,
  host,
  port,
}): DbInterface => {
  const connection = new Sequelize(database, username, password, {
    dialect: "mysql",
    host: "host.docker.internal" || host,
    pool: {
      idle: 10000,
      max: 5,
      min: 0,
    },
    port: Number(port),
  });

  const db: DbInterface = {
    Sequelize,
    Todo: todoFactory(connection, Sequelize),
    connection,
  };

  Object.values(db).forEach((model: any) => {
    if (model.associate) {
      model.associate(db);
    }
  });

  return db;
};

export { todoFactory, TodoInstance, ITodoAtrributes, createModels };
