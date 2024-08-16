"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMySQL = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const envConfig_1 = require("../../config/env/envConfig");
exports.sequelize = new sequelize_1.Sequelize(envConfig_1.config.mysqlDatabase, envConfig_1.config.mysqlUsername, envConfig_1.config.mysqlPassword, {
    host: envConfig_1.config.mysqlHost,
    port: Number(envConfig_1.config.mysqlPort),
    dialect: 'mysql'
});
const connectToMySQL = async () => {
    try {
        await exports.sequelize.authenticate();
        console.log('Conexão com o MySQL estabelecida com sucesso.');
    }
    catch (error) {
        console.error('Erro ao conectar ao MySQL:', error);
        process.exit(1);
    }
};
exports.connectToMySQL = connectToMySQL;
