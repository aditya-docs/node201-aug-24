const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      cast: false,
      required: [true, "'title' is a required field"],
      unique: true,
    }, //Title is string
    authors: [
      {
        type: String,
        cast: false,
      },
    ], //Authors is an array of strings
    content: { type: String, default: "" }, //Content is string
    publishedAt: { type: Date, default: null }, //publishedAt is Date
  },
  { versionKey: false, timestamps: true }
);

module.exports = blogSchema;
