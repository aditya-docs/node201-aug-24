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

  findAll = () => Users.find({});

  findByUsername = (username) => Users.findOne({ username });

  findById = (userId) => Users.findById(userId)
}

module.exports = UserService;
