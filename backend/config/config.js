const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "locahost",
  PORT: process.env.PORT || 3000,
  MONGODB_URL: process.env.MONGODB_URL || "127.0.0.1:27017",
  DATABASE_NAME: process.env.DATABASE_NAME || "todo-manager",
};
