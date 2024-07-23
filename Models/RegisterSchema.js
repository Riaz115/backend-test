//requiring
require("dotenv").config();
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const forRegisterFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error(" Email is invalid please enter valid email");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

//bcrypt password
forRegisterFormSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(this.password, salt);
  this.password = hashPassword;
});

//login compare password
forRegisterFormSchema.methods.forComparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//generate token
forRegisterFormSchema.methods.genToken = async function () {
  return jwt.sign(
    {
      userId: this._id.toString(),
      email: this.email,
      isAdmin: this.isAdmin,
    },
    process.env.SECRETEKEY
  );
};

const UserSchema = mongoose.model("User", forRegisterFormSchema);
// exporting
module.exports = UserSchema;
