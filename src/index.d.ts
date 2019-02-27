import { DataTypeAbstract, DefineAttributeColumnOptions, SequelizeStatic, Sequelize, Model } from "sequelize";
import { ITodoAtrributes, TodoInstance } from "./db/models";

type SequelizeAttribute = string | DataTypeAbstract | DefineAttributeColumnOptions;

declare global {
  namespace Express {
    export interface Request {
      db: {
        connection: Sequelize
        Sequelize: SequelizeStatic
        Todo: Model<TodoInstance, ITodoAtrributes>
      }
    }
  }


  type SequelizeAttributes<T extends { [key: string]: any }> = {
    [P in keyof T]: SequelizeAttribute
  };

}
