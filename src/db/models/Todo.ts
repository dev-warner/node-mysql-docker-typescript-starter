import Sequelize, { Model } from "sequelize";

export interface ITodoAtrributes {
  id?: string;
  message: string;
  complete?: boolean;
}

export type TodoInstance = Sequelize.Instance<ITodoAtrributes> & ITodoAtrributes;

export type TodoClass = Model<TodoInstance, ITodoAtrributes>;

const TABLE_NAME = "Todo";

const todoFactory = (db: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): TodoClass => {
  const ATTRIBUTES: SequelizeAttributes<ITodoAtrributes> = {
    complete: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    message: { type: DataTypes.CHAR(255), allowNull: false },
  };

  const Todo = db.define<TodoInstance, ITodoAtrributes>(TABLE_NAME, ATTRIBUTES);

  return Todo;
};

export default todoFactory;
