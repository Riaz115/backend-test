//requiring
require("dotenv").config();
const mongoose = require("mongoose");

//variables
// const URI = "mongodb://127.0.0.1:27017/RiazPortfolioWebsite";
const URI = process.env.MONGO_URL;
//connecting
const DbConn = async () => {
  try {
    await mongoose.connect(URI);
    console.log("data connected successfully");
  } catch (err) {
    console.log(`there is error and error is ${err}`);
  }
};

module.exports = DbConn;
