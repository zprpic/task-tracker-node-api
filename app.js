const loaders = require("./loaders");

const startServer = async () => {
  const app = loaders.express();
  try {
    await loaders.connectDB(loaders.config.databaseURL);
    app.listen(loaders.config.port, () => {
      console.log(`Server is listening on port ${loaders.config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
