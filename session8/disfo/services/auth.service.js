const bcrypt = require("bcrypt");
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
    return {
      isLoggedIn: await this.verifyPassword(password, reqUser.password),
      userId: reqUser._id,
    };
  };

  verifyPassword = (plainTextPassword, hashedPassword) =>
    bcrypt.compare(plainTextPassword, hashedPassword);
}

module.exports = AuthService;
