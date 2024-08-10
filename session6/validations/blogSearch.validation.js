const { celebrate, Joi, Segments } = require("celebrate");

const blogSearchSchema = Joi.object({
  title: Joi.string().max(50),
  author: Joi.string().email(),
}).or("title", "author");

const blogSearchValidator = celebrate({
  [Segments.QUERY]: blogSearchSchema,
});

module.exports = { blogSearchValidator, blogSearchSchema };
