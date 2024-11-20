const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "yashkapadighanshyamkapadibheem1$";
// Route to create a new user
router.post(
  "/createUser",
  [
    body("email").isEmail().withMessage("Please provide a valid email."),
    body("password", "Password must be between 5 and 10 characters.").isLength({
      min: 5,
      max: 10,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let securePassword = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        password: securePassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

// Route for user login
router.post(
  "/loginUser",
  [
    body("email").isEmail().withMessage("Please provide a valid email."),
    body("password", "Password must be at least 5 characters long.").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({ error: "Incorrect email or password." });
      }
      const pwdCompare = await bcrypt.compare(password, userData.password);

      if (!pwdCompare) {
        return res.status(400).json({ error: "Incorrect email or password." });
      }
      const data = {
        user: {
          id: userData.id,
        },
      };
      const authToken = jwt.sign(data, jwtSecret);
      res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

module.exports = router;
