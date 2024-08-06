const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: String, //Title is string
  authors: [String], //Authors is an array of strings
  content: String, //Content is string
  publishedAt: Date, //publishedAt is Date
});

module.exports = blogSchema;
