const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  id: { type: Number, required: [true, "id is required"] },
  userId: { type: Number, required: [true, "userId is required"] },
  title: { type: String, required: [true, "title is required"] },
  completed: { type: Boolean, required: [true, "completed is required"] },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
