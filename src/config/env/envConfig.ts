import "dotenv/config";

export const config = {
  mysqlDatabase: process.env.MYSQL_DATABASE as string,
  mysqlUsername: process.env.MYSQL_USER as string,
  mysqlPassword: process.env.MYSQL_PASSWORD as string,
  mysqlHost: process.env.MYSQL_HOST as string,
  mysqlPort: process.env.MYSQL_PORT as string,
  portApi: process.env.PORT,
};
