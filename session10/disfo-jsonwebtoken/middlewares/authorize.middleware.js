const AuthService = require("../services/auth.service");
const UserService = require("../services/user.service");
const AuthServiceInstace = new AuthService();
const UserServiceInstance = new UserService();
// Authorization: "Bearer 138726584723"

const authorize = async (req, res, next) => {
    if(!req.headers.authorization)
        return res.sendStatus(403)
    const token = req.headers.authorization.split(" ")[1];
    try {
        const { userId } = AuthServiceInstace.verifyJwt(token, process.env.JWT_SECRET_KEY);
        const user = await UserServiceInstance.findById(userId)
        req.user = user
        next()
    } catch (error) {
        console.error(error.name)
        if(error.name === "JsonWebTokenError")
            return res.status(403).send({message: 'Invalid JWT'})
        if(error.name === "TokenExpiredError")
            return res.status(403).send({message: 'JWT has expired'})
        res.sendStatus(403)
    }
}

module.exports = authorize;