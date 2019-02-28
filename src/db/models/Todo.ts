import Sequelize from "sequelize";

export interface ITodoAtrributes {
  id?: string;
  message: string;
  complete?: boolean;
}

const TABLE_NAME = "Todo";

const ATTRIBUTES: SequelizeAttributes<ITodoAtrributes> = {
  complete: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
  message: { type: Sequelize.STRING, allowNull: false },
};

const todoFactory = (db: Sequelize.Sequelize) => {
  const Todo = db.define<TodoInstance, ITodoAtrributes>(TABLE_NAME, ATTRIBUTES);

  return Todo;
};

export type TodoInstance = Sequelize.Instance<ITodoAtrributes> & ITodoAtrributes;
export default todoFactory;
