const Tags = require("../model/Tags");

// Fn for get api
const getTagsList = async (req, res) => {
  try {
    const todos = await Tags.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// Fn for posts api
const createATag = async (req, res) => {
  try {
    console.log("creatin tag....", req.body);
    const tagData = await Tags.find({ name: req.body.name });
    console.log("tagData", tagData);
    if (tagData.length) {
      throw new Error("Tag already exists");
    }
    const newTag = Tags.create({ name: req.body.name });
    res.status(200).json(newTag);
  } catch (error) {
    console.log("err", typeof error, error.message);
    res.status(400).json({ message: error.message });
  }
};

// // Fn for delete api
// const deleteATodo = async (req, res) => {
//   try {
//     const todo = await Todos.findById(req.params.id);
//     if (!todo) throw Error("Something went wrong while deleting the post");
//     const deletedTodo = await Todos.findByIdAndDelete(req.params.id);
//     res.status(200).json({ success: true });
//   } catch (error) {
//     res.status(400).json({ message: err });
//   }
// };

// // Fn for update
// const updateATodo = async (req, res) => {
//   console.log("req.params", req.params);
//   try {
//     const todo = await Todos.findById(req.params.id);
//     if (!todo) throw Error("Something went wrong while updating the post");
//     const updatedTodo = await Todos.findByIdAndUpdate(req.params.id, req.body);
//     res.status(200).json({ success: true });
//   } catch (error) {
//     res.status(400).json({ message: err });
//   }
// };

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
  getTagsList,
  createATag,
};
