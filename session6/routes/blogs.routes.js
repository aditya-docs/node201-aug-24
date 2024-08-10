const router = require("express").Router();
const {
  createNewBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
  searchBlogs,
} = require("../controllers/blogs.controllers");
const findAndAttachBlogToReq = require("../middlewares/findAndAttachBlogToReq");
const { blogSearchValidator } = require("../validations/blogSearch.validation");

router.post("/new", createNewBlog);
router.get("/", getAllBlogs);
router.get("/search", blogSearchValidator, searchBlogs);
//clubbing routes using route function
// router.use(findAndAttachBlogToReq);

router.get("/:id", findAndAttachBlogToReq, getBlogById);
router.patch("/:id", findAndAttachBlogToReq, updateBlogById);
router.delete("/:id", findAndAttachBlogToReq, deleteBlogById);

module.exports = router;
