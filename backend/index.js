const express = require("express");
const app = express();
const port = 8000;
const mongoDB = require("./db"); // Ensure this file connects to MongoDB
// const cors = require("cors");
// app.use(cors());
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

// Test route
app.get("/", (req, res) => {
  res.send("Hello World====!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Connect to MongoDB
mongoDB();