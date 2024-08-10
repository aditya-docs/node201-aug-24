const { celebrate, Joi, Segments } = require("celebrate");

const validBrands = ["apple", "samsung"];
const categories = ["smartphones", "tablets", "pc"];

const productSearchSchema = Joi.object({
  brand: Joi.string().valid(...validBrands),
  category: Joi.string().valid(...categories),
}).or("brand", "category");

const productSearchValidator = celebrate({
  [Segments.QUERY]: productSearchSchema,
});

module.exports = { productSearchSchema, productSearchValidator };
