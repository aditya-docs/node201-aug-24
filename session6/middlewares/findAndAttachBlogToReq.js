const BlogService = require("../services/blog.service");
const BlogServiceInstance = new BlogService();

const findAndAttachBlogToReq = async (req, res, next) => {
  const reqBlog = await BlogServiceInstance.getById(req.params.id);
  if (reqBlog) {
    req.reqBlog = reqBlog;
    return next();
  }
  res.status(404).send({ message: "Could not find a blog with this id" });
};

module.exports = findAndAttachBlogToReq;
