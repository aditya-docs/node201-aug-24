const BlogService = require("../services/blog.service");
const BlogServiceInstance = new BlogService();

const createNewBlog = async (req, res) => {
  try {
    const newBlog = BlogServiceInstance.create(req.body);
    await BlogServiceInstance.save(newBlog);
    res.status(201).send(newBlog);
  } catch (error) {
    if (error.name === "ValidationError")
      return res.status(400).send({ message: error.message });
    res.status(500).send({ message: "Something went wrong", error });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    res.send(await BlogServiceInstance.getAll());
    // getAll().then(result => res.send(result))
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
    const updatedBlog = await BlogServiceInstance.updateById(
      req.params.id,
      req.body
    );
    res.send(updatedBlog);
  } catch (error) {
    res.status(500).send({ message: "Something went wrong", error });
  }
};

const deleteBlogById = async (req, res) => {
  try {
    await BlogServiceInstance.deleteById(req.params.id);
    res.sendStatus(204);
    // res.send({ message: "Deleted sucessfully" });

    //returnin promise example

    // const response = new Promise((resolve, reject) => {
    //   if (2 === "2") return resolve("equal");
    //   throw new Error("error");
    // });
    // res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong", error });
  }
};

const searchBlogs = async (req, res) => {
  const { title, author } = req.query;

  try {
    if (title && author)
      return res.send(
        await BlogServiceInstance.searchByTitleAndAuthor(title, author)
      );
    if (title) return res.send(await BlogServiceInstance.searchByTitle(title));
    if (author)
      return res.send(await BlogServiceInstance.searchByAuthor(author));
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
  searchBlogs,
};
