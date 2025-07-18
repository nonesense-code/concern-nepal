const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Models/UserModel.js");

router.get("/all", async (req, res) => {
  try {
    const users = await User.find({}, "-password").sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: { email: newUser.email },
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Create JWT payload
    const payload = {
      id: user._id,
      email: user.email,
    };

    // Sign JWT token
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Send email and token in JSON response
    res.status(200).json({ email: user.email, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found." });
    }
    res.json({ message: "User deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete user." });
  }
});

module.exports = router;
