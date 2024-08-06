const verifyAuth = (req, res, next) => {
  if (req.headers.authorization !== process.env.password)
    return res.sendStatus(403);
  next();
};

module.exports = verifyAuth;
