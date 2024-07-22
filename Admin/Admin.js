const express = require("express");
const router = express.Router();
const controller = require("../Admin/AdminControllers");
const userAuth = require("../MiddleWares/UserAuth.js");
const adminAuthCheck = require("../MiddleWares/AdminAuth");

router.route("/admin").get(userAuth, adminAuthCheck, controller.forAdmin);
router
  .route("/adminServices")
  .post(userAuth, adminAuthCheck, controller.adminServices);
router
  .route("/forAdminContact")
  .get(userAuth, adminAuthCheck, controller.adminContact);
router
  .route("/forAdminContact/:id")
  .delete(userAuth, adminAuthCheck, controller.adminContactDel);

router.route("/adminUser").get(userAuth, adminAuthCheck, controller.adminUser);
router
  .route("/aminServices/:id")
  .delete(userAuth, adminAuthCheck, controller.forAdminServiceDelete);
router
  .route("/adminUser/:id")
  .delete(userAuth, adminAuthCheck, controller.forAdminUserDelete);
router
  .route("/adminUser/:id")
  .patch(userAuth, adminAuthCheck, controller.forAdminUserUpdate);
router
  .route("/adminUser/:id/edit")
  .get(userAuth, adminAuthCheck, controller.getDataForUpdateUser);
router
  .route("/adminServices/:id")
  .patch(userAuth, adminAuthCheck, controller.forAdminServiceUpdate);
router
  .route("/adminServices/:id/edit")
  .get(userAuth, adminAuthCheck, controller.getDataForUpdateService);

module.exports = router;
