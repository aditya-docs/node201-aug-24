const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      cast: false,
    }, //Title is string
    authors: [
      {
        type: String,
        cast: false,
      },
    ], //Authors is an array of strings
    content: String, //Content is string
    publishedAt: Date, //publishedAt is Date
  },
  { versionKey: false }
);

module.exports = blogSchema;
