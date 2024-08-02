const express = require("express");
const {
  getUsers,
  getUserById,
  searchUsers,
} = require("../controllers/users.controllers");

const router = express.Router();

router.get("/", getUsers); //Returns all the user data

router.get("/search", searchUsers); // ?gender=<string>&age=<number> → Returns the users filtered on the basis of gender and/or age

router.get("/:uuid", getUserById); //Returns the user object by finding the user based on login.uuid

module.exports = router;
