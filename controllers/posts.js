const Post = require("../models/Post");

const getAllController = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(201).json({
      success: true,
      message: "Successfuly got posts",
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createController = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();

    res.status(201).json({
      success: true,
      message: "Post created successfuly.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateController = async (req, res) => {
  console.log(req.body);
  try {
    const post = await Post.findByIdAndUpdate({ _id: req.body._id }, req.body);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post doesn't exist",
      });
    }

    res.status(201).json({
      success: true,
      message: "Successfully updated a post.",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const postSearchController = async (req, res) => {
  try {
    const input = req.params.input;
    const posts = await Post.find({ title: { $regex: input, $options: "i" } });
    res.status(200).json({
      success: true,
      message: "Successfully got the posts",
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createController, updateController, getAllController, postSearchController };
