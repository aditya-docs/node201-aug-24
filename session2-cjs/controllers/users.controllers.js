const usersJson = require("../users.json");

const getUsers = (req, res) => {
  res.send(usersJson.data);
};

const getUserById = (req, res) => {
  const { uuid } = req.params;
  const reqUser = usersJson.data.find((user) => user.login.uuid === uuid);
  if (reqUser) return res.send(reqUser);
  res
    .status(404)
    .send({ message: `User with uuid: ${uuid} could not be found` });
};

const searchUsers = (req, res) => {};

module.exports = { getUsers, getUserById, searchUsers };
