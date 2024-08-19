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

    await sequelize.sync();
  } catch (error) {
    process.exit(1);
  }
};
