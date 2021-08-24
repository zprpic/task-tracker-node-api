function routeHandler(handler) {
  let responseStatus = 200;
  return async (req, res, next) => {
    try {
      const routeResult = await handler(req, res);
      return res.json(routeResult);
    } catch (error) {
      responseStatus = 404;
      next(error);
    }
    return res.status(responseStatus);
  };
}

module.exports = routeHandler;
