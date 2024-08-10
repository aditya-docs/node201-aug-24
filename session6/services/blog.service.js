const Blog = require("../models/blog.model");

class BlogService {
  create = (payload) => new Blog(payload);

  save = (newBlog) => newBlog.save();

  getAll = () => Blog.find({});

  getById = (blogId) => Blog.findById(blogId);

  updateById = (blogId, payload) =>
    Blog.findByIdAndUpdate(blogId, payload, {
      new: true,
    });

  deleteById = (blogId) => Blog.findByIdAndDelete(blogId);

  searchByTitle = (title) =>
    Blog.find({
      title: { $regex: new RegExp(title), $options: "i" },
    });

  searchByAuthor = (author) =>
    Blog.find({
      authors: { $elemMatch: { email: author } },
    });

  searchByTitleAndAuthor = (title, author) =>
    Blog.find({
      $and: [
        { title: { $regex: new RegExp(title), $options: "i" } },
        { authors: { $elemMatch: { email: author } } },
      ],
    });
}

module.exports = BlogService;
