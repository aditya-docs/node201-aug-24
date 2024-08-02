const getQueryErrors = require("../validations/userSearch.validation");
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

  const { error } = getQueryErrors({ gender, age });
  if (error) return res.status(422).send({ message: error.details[0].message });

  // if (gender && !validGenders.includes(gender))
  //   return res.status(422).send({
  //     message: `Gender must be on one of: ${validGenders.join(", ")}`,
  //   });

  // if ((age && isNaN(age)) || age < 0 || age > 100)
  //   return res.status(422).send({
  //     message: `Age must be a number between 0 and 100`,
  //   });

  if (gender && age)
    return res.send(
      usersJson.data.filter(
        (user) => user.gender === gender && String(user.dob.age) === age
      )
    );
  if (gender)
    return res.send(usersJson.data.filter((user) => user.gender === gender));
  if (age)
    return res.send(
      usersJson.data.filter((user) => String(user.dob.age) === age)
    );
};

module.exports = { getUsers, getUserById, searchUsers };
