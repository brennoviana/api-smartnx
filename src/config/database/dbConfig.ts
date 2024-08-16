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
    console.log("Conexão com o MySQL estabelecida com sucesso.");
  } catch (error) {
    console.error("Erro ao conectar ao MySQL:", error);
    process.exit(1);
  }
};
