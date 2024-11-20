const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://admin:admin@cluster0.s1it3.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
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
