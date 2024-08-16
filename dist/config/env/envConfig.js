"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
exports.config = {
    mysqlDatabase: process.env.MYSQL_DATABASE,
    mysqlUsername: process.env.MYSQL_USER,
    mysqlPassword: process.env.MYSQL_PASSWORD,
    mysqlHost: process.env.MYSQL_HOST,
    mysqlPort: process.env.MYSQL_PORT,
    portApi: process.env.PORT
};
