import db from "../db/"
import { todoFactory } from "../db/models";

global.beforeEach(async () => {
  const blacklist = ['Sequelize', 'connection'];

  // clear and recreate the db

  Object.keys(db).forEach(key => {
    if (!blacklist.includes(key)) {
      await db[key].sync({ force: true });
    }
  })

});
