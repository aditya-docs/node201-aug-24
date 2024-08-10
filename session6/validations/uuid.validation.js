const { celebrate, Joi, Segments } = require("celebrate");

const uuidValidator = celebrate({
  [Segments.PARAMS]: Joi.object({
    uuid: Joi.string().guid({
      version: ["uuidv4"],
    }),
  }),
});

module.exports = uuidValidator;
