const { app, connect } = require("./loaders");

const startServer = async () => {
  try {
    await connect();
    app();
  } catch (error) {
    console.log(error);
  }
};

startServer();
