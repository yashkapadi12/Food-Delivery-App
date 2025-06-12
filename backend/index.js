require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000
const mongoDB = require("./db"); // Ensure this file connects to MongoDB
app.use((req, res, next) => {

  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-requested-with,Content-Type,Accept"
  );
  next();
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Route for creating users
app.use("/api", require("./routes/CreateUser"));
app.use("/api", require("./routes/DisplayData"));
app.use("/api", require("./routes/OrderData"));
// Test route
app.get("/", (req, res) => {
  res.send("Hello Webelight");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Connect to MongoDB
mongoDB();
