const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: String,
    tags: [String],
    image: String,
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },
    content: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
