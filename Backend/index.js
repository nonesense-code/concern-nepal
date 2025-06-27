const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL;
app.use(cors());

// MongoDB Connection
const { DBConnection } = require("./Models/DB_Connection");
DBConnection();

const PORT = process.env.PORT || 5001;

// Import Routes
const HomeRouter = require("./Routes/Home.js");
const BlogRouter = require("./Routes/Blogs.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", HomeRouter);
app.use("/blog", BlogRouter);

// Start the server
app.listen(PORT, (err) => {
  if (err) {
    console.log("Error running server:", err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
