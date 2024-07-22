//requiring
const express = require("express");
const router = express.Router();
const controller = require("../Controllers/FirstControllers");
const UserSchema = require("../MiddleWares/userValidationzod");
const forValidation = require("../MiddleWares/CheckUserValidationzod");
const ContactScehma = require("../MiddleWares/ContactZodValidation");
const forContactValidation = require("../MiddleWares/CheckContactValidation.js");
const forUserAuth = require("../MiddleWares/UserAuth.js");

//routes
router.route("/").get(controller.home);
router.route("/register").post(forValidation(UserSchema), controller.register);
router.route("/login").post(controller.login);
router
  .route("/contact")
  .post(forUserAuth, forContactValidation(ContactScehma), controller.contact);
router.route("/services").get(controller.forAdminServicesGet);
router.route("/myuser").get(forUserAuth, controller.user);

//exporting
module.exports = router;
