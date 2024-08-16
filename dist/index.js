"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const envConfig_1 = require("./config/env/envConfig");
const dbConfig_1 = require("./config/database/dbConfig");
const PORT = envConfig_1.config.portApi;
const startServer = async () => {
    await (0, dbConfig_1.connectToMySQL)();
    app_1.app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
};
startServer();
