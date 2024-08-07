const Blog = require("../models/blog.model");

const findAndAttachBlogToReq = async (req, res, next) => {
  const reqBlog = await Blog.findById(req.params.id);
  if (reqBlog) {
    req.reqBlog = reqBlog;
    return next();
  }
  res.status(404).send({ message: "Could not find a blog with this id" });
};

module.exports = findAndAttachBlogToReq;
