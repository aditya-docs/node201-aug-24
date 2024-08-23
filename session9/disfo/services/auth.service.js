const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();

class AuthService {
  signup = async ({ username, email, password, fullName }) =>
    UserServiceInstance.register({
      username,
      email,
      password: await this.generatePasswordHash(password),
      fullName,
    });

  generatePasswordHash = (password) => bcrypt.hash(password, 10);

  login = async ({ username, password }) => {
    const reqUser = await UserServiceInstance.findByUsername(username);
    if (!(await this.verifyPassword(password, reqUser.password))) {
      return { isLoggedIn: false };
    }
    return {
      isLoggedIn: true,
      userId: reqUser._id,
    };
  };

  verifyPassword = (plainTextPassword, hashedPassword) =>
    bcrypt.compare(plainTextPassword, hashedPassword);

  generateJwt = (userId) =>
    jwt.sign(
      {
        userId,
        // permissions: ["profile:read", "profile:write", "user:read"],
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
}

module.exports = AuthService;
