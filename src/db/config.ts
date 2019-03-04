export default {
  development: {
    database: process.env.DB_NAME,
    dialect: "mysql",
    host: process.env.DB_HOSTNAME,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
  },
  production: {
    database: process.env.DB_NAME,
    dialect: "mysql",
    host: process.env.DB_HOSTNAME,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
  },
  test: {
    database: process.env.DB_NAME,
    dialect: "mysql",
    host: process.env.DB_HOSTNAME,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
  },
};
