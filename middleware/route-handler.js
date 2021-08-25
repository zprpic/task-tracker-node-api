function routeHandler(handler) {
  return async (req, res, next) => {
    try {
      let responseStatus = 200;
      const routeResult = await handler(req, res);
      res.status(responseStatus).json(routeResult);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = routeHandler;
