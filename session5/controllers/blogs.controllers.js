const Blog = require("../models/blog.model");

const createNewBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    // const newBlog = await Blog.create(req.body);
    res.status(201).send(newBlog);
  } catch (error) {
    res.status(500).send({ message: "Something went wrong", error });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    res.send(await Blog.find({}));
  } catch (error) {
    res.status(500).send({ message: "Something went wrong", error });
  }
};

const getBlogById = async (req, res) => {
  try {
    return res.send(req.reqBlog);
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId")
      return res.status(422).send({ message: "Invalid blog id" });
    res.status(500).send({ message: "Something went wrong", error });
  }
};

const updateBlogById = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      // returnDocument: "after",
      new: true,
    });
    res.send(updatedBlog);
  } catch (error) {
    res.status(500).send({ message: "Something went wrong", error });
  }
};

const deleteBlogById = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
    // res.send({ message: "Deleted sucessfully" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong", error });
  }
};

module.exports = {
  createNewBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
};
