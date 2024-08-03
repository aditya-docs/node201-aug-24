const validator = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.query);
  if (error) return res.status(422).send({ message: error.details[0].message });
  next();
};

module.exports = validator;
