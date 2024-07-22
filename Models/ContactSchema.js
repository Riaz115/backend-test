//requiring
const { Schema, model, default: mongoose } = require("mongoose");

//creating
const forContactSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  msg: {
    type: String,
    required: true,
    trim: true,
  },
});

const Contacts = model("Contact", forContactSchema);

//exporting
module.exports = Contacts;
