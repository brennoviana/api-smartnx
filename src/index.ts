import { app } from "./app/app";
import { config } from "./config/env/envConfig";
import { connectToMySQL } from "./config/database/dbConfig";

const PORT = config.portApi;

const startServer = async () => {
  await connectToMySQL();

  app.listen(PORT, () => {});
  console.log(`Server is running on port ${PORT}.`);
};

startServer();
