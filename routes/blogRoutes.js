const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
} = require("../controllers/blogController");

//router object
const router = express.Router();

//routes

//all blogs using GET method
router.get("/all-blog", getAllBlogsController);

//create blog using POST method
router.post("/create-blog", createBlogController);

//update blog using PUT method
router.put("/update-blog/:id", updateBlogController);

//single blog details using get method
router.get("/get-blog/:id", getBlogByIdController);

//delete blog using DELETE method
router.delete("/delete-blog/:id", deleteBlogController);

module.exports = router;
