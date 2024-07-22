//requiring
const mongoose = require("mongoose");

//creating
const ServicesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  subtitle: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  amountFrom: {
    type: String,
    required: true,
    trim: true,
  },
  amountTo: {
    type: String,
    required: true,
    trim: true,
  },
});

//creating collection
const forServices = mongoose.model("Service", ServicesSchema);

//exportig
module.exports = forServices;
