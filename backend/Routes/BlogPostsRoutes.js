const express = require("express");
const verify = require("../middleware/privateRoute");
const router = express.Router();

const {
  getBlogPosts,
  createABlogPost,
  deleteABlogPost,
  updateABlogPost,
  getBlogPostsByTagId,
} = require("../Controller/blogPosts");

//function to get all blog posts api
router.get("/", verify, getBlogPosts);

// Get Blog Posts by tagId
router.get("/tag/:id", verify, getBlogPostsByTagId);

//function for Posts api
router.post("/", verify, createABlogPost);

//function for delete post
router.delete("/:id", verify, deleteABlogPost);

//function for update
router.patch("/:id", verify, updateABlogPost);

//function for get by id
// router.get("/:id", verify, getById);

module.exports = router;
