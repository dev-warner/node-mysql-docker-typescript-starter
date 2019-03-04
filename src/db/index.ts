import { createModels } from "./models";

import sequelizeConfig from "./config";

const db = createModels(sequelizeConfig[process.env.NODE_ENV]);

db.connection.sync();

const attachDatabaseToApplication = (req, _, next) => {
  req.db = db;
  next();
};

export default db;
export { attachDatabaseToApplication };
