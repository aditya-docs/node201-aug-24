const Users = require("../models/user.model");

class UserService {
  register = async ({ fullName, email, username, password }) => {
    try {
      const newUser = new Users({ email, username, fullName, password });
      const result = await newUser.save();
      return result;
    } catch (error) {
      throw error;
    }
  };

  findAll = async () => {
    const userResult = await Users.find({});
    return userResult;
  };

  findByUsername = async (username) => {
    try {
      console.log(username);
      const userResult = await Users.findOne({ username });
      return userResult;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = UserService;
