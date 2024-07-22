//this is for the admin controller
const myUser = require("../Models/RegisterSchema");
const adminContactData = require("../Models/ContactSchema");
const servicesSchema = require("../Models/ServicesSchema");
const serviceSchema = require("../Models/ServicesSchema");

const forAdmin = async (req, res) => {
  res.status(200).json({ data: "i am admin part" });
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
    res.status(201).json({ msg: addService });
  } catch (err) {
    res.status(500).json({ msg: `there is error and error is ${err}` });
    console.log("there is errror in the controller file", err);
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
  res.status(201).json({ serviceData });
};

//this is for the user page delete
const forAdminUserDelete = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    const DeleteUser = await myUser.findByIdAndDelete({ _id });
    res.status(200).json({ msg: DeleteUser });
  } catch (error) {
    console.log(
      "there is error in admin controller and in user function",
      error
    );
  }
};

//this is for the admin user updatae
const forAdminUserUpdate = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(req.body);
    const updateUser = await myUser.findByIdAndUpdate(
      { _id },
      { $set: req.body }
    );
    res.status(200).json({ user: updateUser });
  } catch (error) {
    console.log("there is  error in the amdin update part", error);
  }
};

//this is for the admin contact delete
const adminContactDel = async (req, res) => {
  try {
    const _id = req.params.id;
    const delUser = await adminContactData.findByIdAndDelete({ _id });
    res.status(200).json({ delUser });
  } catch (error) {
    console.log("there is error in the admin contact delete function ", error);
  }
};

//this is for the service delete
const forAdminServiceDelete = async (req, res) => {
  try {
    const _id = req.params.id;
    const delService = await serviceSchema.findByIdAndDelete({ _id });
    res.status(200).json({ delService });
  } catch (error) {
    console.log("this is the service delete part error", error);
  }
};

//this is for getting the data for update user
const getDataForUpdateUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const userForUpdate = await myUser.findById({ _id });
    if (userForUpdate) {
      res.status(200).json(userForUpdate);
    } else {
      res.status(404).json({ msg: "user not found " });
    }
  } catch (err) {
    console.log("there is error in the update user get data function ", err);
  }
};

//this is for  update services
const forAdminServiceUpdate = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateService = await servicesSchema.findByIdAndUpdate(
      { _id },
      { $set: req.body }
    );

    if (updateService) {
      res.status(201).json({ updateService });
    } else {
      res
        .status(404)
        .json({ msg: "service not update successfully there is error" });
    }
  } catch (error) {
    console.log("there is error in the service update ", error);
  }
};

//this is for the get data for service update
const getDataForUpdateService = async (req, res) => {
  try {
    const _id = req.params.id;
    const myService = await serviceSchema.findById({ _id });
    if (myService) {
      res.status(201).json({ myService });
    } else {
      res.status(404).json({ msg: "service not found" });
    }
  } catch (error) {
    console.log("there is error in the service get ", error);
  }
};

module.exports = {
  forAdmin,
  adminServices,
  forAdminUserDelete,
  forAdminServicesGet,
  adminUser,
  adminContact,
  forAdminUserUpdate,
  adminContactDel,
  forAdminServiceDelete,
  getDataForUpdateUser,
  forAdminServiceUpdate,
  getDataForUpdateService,
};
