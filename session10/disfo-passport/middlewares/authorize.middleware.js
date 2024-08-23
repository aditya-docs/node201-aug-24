const passport = require("passport");
const JwtStrategy = require("../config/passport");

passport.use(JwtStrategy);

//const authorize = passport.authenticate('jwt', {session: false })

const authorize = (req, res, next) => passport.authenticate('jwt', function(err, user, info) {
    if (err) return next(err);
    if (!user) return res.status(403).send({ message: 'User is not authenticated.' });
    req.user = user;
    next();
  })(req, res, next);

module.exports = authorize;