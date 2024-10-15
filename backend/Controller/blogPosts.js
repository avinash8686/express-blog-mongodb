const Blogposts = require("../model/Blogposts");

// Fn for get api
const getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await Blogposts.find({ user: req.user._id });
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const getBlogPostsByTagId = async (req, res) => {
  try {
    console.log("req.params", req.params);
    const blogPosts = await Blogposts.find({
      tag: req.params.id,
      user: req.user._id,
    });
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// Fn for posts api
const createABlogPost = async (req, res) => {
  try {
    console.log("creatin todo....", req.body, req.user);
    const newBlogPost = Blogposts.create({
      title: req.body.title,
      body: req.body.body,
      tag: req.body.tag,
      user: req.user._id,
    });
    if (!newBlogPost) throw Error("Something went wrong while saving the post");
    res.status(200).json(newBlogPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Fn for delete api
const deleteABlogPost = async (req, res) => {
  try {
    const blogPost = await Blogposts.findById(req.params.id);
    if (!blogPost) throw Error("Something went wrong while deleting the post");
    const deletedBlogPost = await Blogposts.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ message: err });
  }
};

// Fn for update
const updateABlogPost = async (req, res) => {
  console.log("req.params", req.params);
  try {
    const blogPost = await Blogposts.findById(req.params.id);
    if (!blogPost) throw Error("Something went wrong while updating the post");
    const updatedBlogPost = await Blogposts.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ message: err });
  }
};

// Fn for get by id
// const getById = async (req, res) => {
//   try {
//     const post = await Posts.findById(req.params.id);
//     if (!post) throw Error("no items");
//     res.status(200).json(post);
//   } catch (error) {
//     res.status(400).json({ message: err });
//   }
// };

module.exports = {
  getBlogPosts,
  createABlogPost,
  deleteABlogPost,
  updateABlogPost,
  getBlogPostsByTagId,
};
