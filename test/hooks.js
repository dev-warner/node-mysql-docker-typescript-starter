const models = require ("../src/db");

beforeEach(done => truncate().then(done));

const truncateTable = (modelName) => {
  return models.db[modelName].destroy({
    force: true,
    where: {},
  });
};

function truncate(model) {
  if (model) {
    return truncateTable(model);
  }

  return Promise.all(
    Object.keys(models.db).map((key) => {
      if (["connection", "Sequelize"].includes(key)) {
        return null;
      }
      return truncateTable(key);
    }),
  );
}

module.exports = truncate;
