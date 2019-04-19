/**
  * Web App Name: Awesome Surveys!
  * Group Members: Shiv Rana 300990505
  * Gabriel Norman 300897331
  * Ryan Sterling 300509648
  * Nusrat Jahan 300967157
  * Description: A web app that allows users to take surveys
  */

let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

/* POST - processes the Login Page */
router.post("/login", indexController.processLoginPage);

/* POST - processes the User Registration Page */
router.post("/register", indexController.processRegisterPage);

/* GET - perform user logout */
router.get("/logout", indexController.performLogout);

module.exports = router;
