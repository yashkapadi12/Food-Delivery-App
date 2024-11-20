const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    console.log(global.food_items, global.food_category);
    res.send([global.food_category, global.food_items]);
  } catch (error) {
    console.log("Error", error);
    res.send("Server Error");
  }
});
module.exports = router;
