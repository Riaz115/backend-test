//requiring
const myUser = require("../Models/RegisterSchema");
const ContactSchema = require("../Models/ContactSchema");
const servicesSchema = require("../Models/ServicesSchema");
const adminContactData = require("../Models/ContactSchema");

//this is code for the home section
const home = async (req, res) => {
  res.send(" i am home section controllers");
};

//this is code for the register section
const register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    //check exist
    const userExist = await myUser.findOne({ email });
    if (userExist) {
      res.status(401).json({ msg: "email already exists" });
    } else {
      //new regitration
      const CreatedUser = await myUser.create({
        name,
        email,
        phone,
        password,
      });

      //generate token
      res.status(201).json({
        msg: "register successfully",
        sucMsg: CreatedUser,
        token: await CreatedUser.genToken(),
        userId: CreatedUser._id.toString(),
      });
    }
  } catch (err) {
    console.log("there is error in register page", err);
    res.status(500).json({ msg: err });
  }
};

//this is for the login page
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //user exists
    const userExist = await myUser.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      res.status(400).json({ emailmsg: " email is  invalid credantials" });
    } else {
      //if present
      const user = await userExist.forComparePassword(password);
      console.log(user);
      if (user) {
        res.status(201).json({
          msg: "login successfully",
          forAdmin: userExist,
          token: await userExist.genToken(),
          userId: userExist._id.toString(),
        });
      } else {
        res.status(400).json({ passwordmsg: " password not match" });
      }
    }
  } catch (err) {
    res.status(500).json({ msg: " server error invalid  email or password" });
  }
};

//this is for the contact page
const contact = async (req, res) => {
  try {
    const { name, email, msg } = req.body;
    const contactData = await ContactSchema.create({ name, email, msg });
    res
      .status(201)
      .json({ msg: "data stored successfully", newMsg: contactData });
    console.log(contactData);
  } catch (error) {
    console.log("there is error in the contact file of backend", error);
  }
};

//this is for the admin services page
const adminServices = async (req, res) => {
  try {
    const { title, subtitle, description, amountFrom, amountTo } = req.body;
    const addService = await servicesSchema.create({
      title,
      subtitle,
      description,
      amountFrom,
      amountTo,
    });
    console.log(addService);
    res.status(201).json({ msg: addService });
  } catch (err) {
    res.status(500).json({ msg: `there is error and error is ${err}` });
    console.log("there is errror in the controller file", err);
  }
};

//this is for the user route
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    res.status(200).json({ userData });
  } catch (error) {
    console.log(`there is error ${error}`);
  }
};

//this is for the admin contact
const adminContact = async (req, res) => {
  try {
    const myData = await adminContactData.find();
    res.status(200).json({ myData });
  } catch (error) {
    res.status(500).json({
      msg: "there is error in admin contact section in the controller",
    });
  }
};

//this is for the admin user
const adminUser = async (req, res) => {
  try {
    const usersData = await myUser.find();
    res.status(200).json({ usersData });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

//this is for the admin services data get
const forAdminServicesGet = async (req, res) => {
  const serviceData = await servicesSchema.find();
  console.log(serviceData);
  res.status(201).json({ serviceData });
};

//exporting
module.exports = {
  home,
  register,
  login,
  contact,
  adminServices,
  user,
  adminContact,
  adminUser,
  forAdminServicesGet,
};
