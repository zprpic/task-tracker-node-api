const { CustomAPIError } = require("../../errors/index");

function routeHandler(handler) {
  return async (req, res, next) => {
    try {
      let responseStatus = 200;
      const routeResult = await handler(req, res);
      if (routeResult instanceof CustomAPIError) {
        next(routeResult);
      } else {
        res.status(responseStatus).json(routeResult);
      }
    } catch (error) {
      next(error);
    }
  };
}

module.exports = routeHandler;
