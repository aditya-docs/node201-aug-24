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
  const validGenders = ["male", "female"];

  if (gender && !validGenders.includes(gender))
    return res.status(422).send({
      message: `Gender must be on one of: ${validGenders.join(", ")}`,
    });

  if (age && isNaN(age))
    return res.status(422).send({
      message: `Age must be a number`,
    });

  if (gender && age)
    return res.send(
      usersJson.data.filter(
        (user) => user.gender === gender && String(user.dob.age) === age
      )
    );
  else if (gender)
    return res.send(usersJson.data.filter((user) => user.gender === gender));
  else if (age)
    return res.send(
      usersJson.data.filter((user) => String(user.dob.age) === age)
    );
  else
    return res
      .status(400)
      .send({ message: `At least one of 'gender' or 'age' must be present` });
};

module.exports = { getUsers, getUserById, searchUsers };
