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

const searchUsers = (req, res) => {
  const { gender, age } = req.query;
  if (gender && age)
    return res.send(
      usersJson.data.filter(
        (user) => user.gender === gender && user.dob.age === age
      )
    );
  if (gender)
    return res.send(usersJson.data.filter((user) => user.gender === gender));
  if (age)
    return res.send(usersJson.data.filter((user) => user.dob.age === age));
};

module.exports = { getUsers, getUserById, searchUsers };
