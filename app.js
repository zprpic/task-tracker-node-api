const loaders = require("./loaders");

const startServer = async () => {
  try {
    await loaders.connect();
    loaders.app();
  } catch (error) {
    console.log(error);
  }
};

startServer();
