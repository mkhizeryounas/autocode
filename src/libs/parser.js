const logger = require('./logger');
const { getFunctionParams, getErrorResponse } = require('./utils');
const Joi = require('joi');

module.exports = (fn) => {
  const name = fn.name;
  const params = getFunctionParams(fn);
  logger.debug('fn.name::', name);
  logger.debug('fn.getFunctionParams::', params);

  const validationSchema = Joi.object()
    .keys(
      Object.fromEntries(
        params.map((e) => {
          return [e, Joi.any().required()];
        })
      )
    )
    .options({ stripUnknown: true });

  return {
    path: `/${name}`,
    handler: async (req, res) => {
      try {
        const { body, query } = req;

        const reqParams = {
          ...body,
          ...query,
          request: req,
        };

        const { value, error } = validationSchema.validate(reqParams);

        if (error) {
          throw error;
        }

        const args = params.map((e) => value[e]).filter((e) => e);

        logger.debug('Calling::', name, 'with params::', reqParams);

        const response = await fn(...args);
        res.json(response);
      } catch (err) {
        logger.error('Something went wrong for fn::', name, err.stack);
        res.status(400).json({
          error: getErrorResponse(err),
        });
      }
    },
  };
};
