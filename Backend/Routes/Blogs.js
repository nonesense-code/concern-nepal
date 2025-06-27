const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Blog = require("../Models/BlogModel.js");

// GET /blog/all
router.get("/all", async (req, res) => {
  try {
    const blogs = await Blog.find(); // get all blogs from DB
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blogs", error });
  }
});

// Asssign the Routes using middleware
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  // Validate Mongo ObjectId format first
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid blog id" });
  }

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { title, author, tags, image, status, content } = req.body;
    console.log(title, "this is title");
    // Create and save the blog in one step
    const savedBlog = await Blog.create({
      title,
      author,
      tags: tags.split(",").map((tag) => tag.trim()), // convert to array
      image,
      status,
      content,
    });

    res.status(201).json({
      message: "New Blog Created",
      blog: savedBlog,
    });
  } catch (error) {
    console.error("Failed to create blog:", error);
    res.status(500).json({ error: "Failed to create blog" });
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const blogId = req.params.id;
    const { title, author, tags, image, status, content } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        title,
        author,
        tags: Array.isArray(tags)
          ? tags
          : (tags || "").split(",").map((t) => t.trim()),
        image,
        status,
        content,
      },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) return res.status(404).json({ error: "Blog not found" });

    res.json(updatedBlog);
  } catch (error) {
    console.error("Update blog error:", error);
    res.status(500).json({ error: "Failed to update blog" });
  }
});

// DELETE /blog/delete/:id
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Blog.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog", error });
  }
});

module.exports = router;
