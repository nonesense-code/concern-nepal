// Load environment variables
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

// MongoDB connection
const { DBConnection } = require("./Models/DB_Connection");
DBConnection();

// Import route handlers
const HomeRouter = require("./Routes/Home.js");
const BlogRouter = require("./Routes/Blogs.js");
const UserRouter = require("./Routes/User.js");

// Route middlewares
app.use("/", HomeRouter);
app.use("/blog", BlogRouter);
app.use("/user", UserRouter);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, (err) => {
  if (err) {
    console.error("Error running server:", err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
