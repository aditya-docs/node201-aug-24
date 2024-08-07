const router = require("express").Router();
const {
  createNewBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} = require("../controllers/blogs.controllers");
const findAndAttachBlogToReq = require("../middlewares/findAndAttachBlogToReq");

router.post("/new", createNewBlog);
router.get("/", getAllBlogs);

//clubbing routes using route function
// router.use(findAndAttachBlogToReq);

router.get("/:id", findAndAttachBlogToReq, getBlogById);
router.patch("/:id", findAndAttachBlogToReq, updateBlogById);
router.delete("/:id", findAndAttachBlogToReq, deleteBlogById);

module.exports = router;
