const Sequelize = require("sequelize");
require("dot-env");

// Get connection pool
const sequelize = new Sequelize(
  process.env.DB_SCHEMA || "",
  process.env.DB_USER || "",
  process.env.DB_PASS || "",
  {
    host: process.env.DB_HOST || "",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    dialectOptions: {
      multipleStatements: true
    }
  }
);

// Initialize
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    throw new Error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
