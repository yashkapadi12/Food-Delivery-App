require("dotenv").config();
const mongoose = require("mongoose");
 
const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI, { useNewUrlParser: true });
    console.log("connected ");
    const db = mongoose.connection.db;
    const fetched_data = await db.collection("food_items").find({}).toArray();

    const food_category = await db
      .collection("food_category")
      .find({})
      .toArray();

    global.food_items = fetched_data;
    global.food_category = food_category;
  } catch (error) {
    console.error("errfor:-", error);
  }
};

module.exports = mongoDB;
