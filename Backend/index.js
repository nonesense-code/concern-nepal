const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5001;

// Import Routes
const HomeRouter = require("./Routes/Home.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Asssign the Routes using middleware
app.use("/", HomeRouter);

// Start the server
app.listen(PORT, (err) => {
  if (err) {
    console.log("Error running server:", err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
