//requiring
require("dotenv").config();
const mongoose = require("mongoose");

//variables
// const URI = "mongodb://127.0.0.1:27017/RiazPortfolioWebsite";
// const URI = process.env.MONGO_URL;
const URI =
  "mongodb://riaz90603:wXTWL3mpNAxTsd2m@ac-6couvvj-shard-00-00.hmtzusf.mongodb.net:27017,ac-6couvvj-shard-00-01.hmtzusf.mongodb.net:27017,ac-6couvvj-shard-00-02.hmtzusf.mongodb.net:27017/RiazPortfolioWebsite?ssl=true&replicaSet=atlas-q12juq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
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
