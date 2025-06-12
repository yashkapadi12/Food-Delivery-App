require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoDB = require("./db");

const app = express();
const port = process.env.PORT || 8000;

// Connect to MongoDB
mongoDB();

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json()); // Parse JSON bodies

// API Routes
app.use("/api", require("./routes/CreateUser"));
app.use("/api", require("./routes/DisplayData"));
app.use("/api", require("./routes/OrderData"));

// Root route
app.get("/", (req, res) => {
  res.send("Hello Webelight");
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
