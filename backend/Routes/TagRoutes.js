const express = require("express");
const verify = require("../middleware/privateRoute");
const router = express.Router();

const {
  createATag,
  getTagsList,
  //   getTodoList,
  //   createATodo,
  //   deleteATodo,
  //   updateATodo,
} = require("../Controller/tag");

//function for get api
router.get("/", verify, getTagsList);

//function for Posts api
router.post("/", verify, createATag);

// //function for delete post
// router.delete("/:id", verify, deleteATodo);

// //function for update
// router.patch("/:id", verify, updateATodo);

//function for get by id
// router.get("/:id", verify, getById);

module.exports = router;
