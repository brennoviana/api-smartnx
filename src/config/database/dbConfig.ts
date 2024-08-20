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

let retryCount = 0;
const maxRetries = 3;

export const connectToMySQL = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    retryCount = 0;
  } catch (error) {
    retryCount++;
    if (retryCount < maxRetries) {
      setTimeout(connectToMySQL, 5000);
    } else {
      process.exit(1);
    }
  }
};
