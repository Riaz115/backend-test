//requiring
const jwt = require("jsonwebtoken");
const ForMyUser = require("../Models/RegisterSchema");

const userAuthMiddleWare = async (req, res, next) => {
  const token = req.header("Authorization");
  console.log(token);

  try {
    if (!token) {
      res.status(401).json({ msg: "please login first " });
    } else {
      const forToken = token.replace("Bearer", "").trim();
      const myToken = await jwt.verify(forToken, process.env.SECRETEKEY);
      const myUser = await ForMyUser.findOne({
        email: myToken.email,
      }).select({
        password: 0,
      });

      req.user = myUser;
      req.token = token;
      req.UserId = myUser._id;
    }

    next();
  } catch (error) {
    console.log("user middle ware error");
  }
};

module.exports = userAuthMiddleWare;
