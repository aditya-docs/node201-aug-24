const mongoose = require("mongoose");
const validator = require("validator");

const authorSchema = mongoose.Schema(
  {
    fullName: { type: String, maxLength: 25 },
    twitterHandle: { type: String },
    email: {
      type: String,
      maxLength: 50,
      validate: {
        validator: (value) => validator.isEmail(value, { host_blacklist: [] }),
        message: ({ value }) => `${value} is not a valid email address!`,
      },
    },
    image: {
      type: String,
      validate: {
        validator: (value) => validator.isURL(value, { protocols: ["https"] }),
        message: (value) => `${value} is not a valid URL!`,
      },
    },
  },
  { _id: false }
);

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
        type: authorSchema,
        cast: false,
      },
    ], //Authors is an array of strings
    content: { type: String, default: "" }, //Content is string
    publishedAt: { type: Date, default: null }, //publishedAt is Date
  },
  { versionKey: false, timestamps: true }
);

module.exports = blogSchema;
