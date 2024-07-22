//requirig
const myUser = require("../Models/RegisterSchema");

const adminAuthCheck = async (req, res, next) => {
  const isAdmin = req.user.isAdmin;
  try {
    if (!isAdmin) {
      res
        .status(200)
        .json({ msg: "you are not admin and can not access data" });
    }

    next();
  } catch (error) {
    console.log("this is error part in admin auth", error);
  }
};

module.exports = adminAuthCheck;
