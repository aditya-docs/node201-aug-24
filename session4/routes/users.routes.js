const express = require("express");
const {
  getUsers,
  getUserById,
  searchUsers,
} = require("../controllers/users.controllers");
const verifyAuth = require("../middlewares/verifyAuth");
const validator = require("../middlewares/validator");

const {
  userSearchValidator,
  userSearchSchema,
} = require("../validations/userSearch.validation");
const uuidValidator = require("../validations/uuid.validation");

const router = express.Router();

// router.use(verifyAuth);

router.get("/", getUsers); //Returns all the user data

//router.get("/search", verifyAuth, validator(userSearchSchema), searchUsers);

router.get("/search", verifyAuth, userSearchValidator, searchUsers); // ?gender=<string>&age=<number> → Returns the users filtered on the basis of gender and/or age

router.get("/:uuid", uuidValidator, getUserById); //Returns the user object by finding the user based on login.uuid

module.exports = router;
