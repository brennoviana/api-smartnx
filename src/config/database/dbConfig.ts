import { Sequelize } from "sequelize";
import { config } from "../../config/env/envConfig";

export const sequelize = new Sequelize(
  config.mysqlDatabase,
  config.mysqlUsername,
  config.mysqlPassword,
  {
    host: config.mysqlHost,
    port: Number(config.mysqlPort),
    dialect: "mysql",
  },
);

export const connectToMySQL = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to MySQL has been established successfully.");

    await sequelize.sync({ alter: true });
    console.log("Tables synchronized successfully.");
  } catch (error) {
    console.error("Error connecting to MySQL:", error);
    process.exit(1);
  }
};
