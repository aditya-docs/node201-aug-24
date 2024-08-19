const AuthService = require("../services/auth.service");
const AuthServiceInstance = new AuthService();

const postSignup = async (req, res) => {
  try {
    const newUser = await AuthServiceInstance.signup(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    if (error.code === 11000)
      return res
        .status(400)
        .send({ messaege: "User with this username of email already exists" });
    console.log(error);
    res.status(500).send({ message: "Oops! Something went wrong", error });
  }
};

const postLogin = async (req, res) => {
  try {
    const { isLoggedIn } = await AuthServiceInstance.login(req.body);
    if (isLoggedIn) return res.send({ message: "Login successful" });
    res
      .status(401)
      .send({ message: "Either username or password is incorrect" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong, try again!" });
  }
};

module.exports = { postSignup, postLogin };