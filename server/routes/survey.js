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

let passport = require('passport');

let surveyController = require('../controllers/survey');

router.post("/addquestion",passport.authenticate('jwt',{session:false}), surveyController.processAddQuestion);

router.post("/addanswer", surveyController.processAddAnswer);

router.get("/delete/:id", passport.authenticate('jwt',{session:false}),surveyController.performQuestionDelete);


router.post("/editquestion/:id", passport.authenticate('jwt',{session:false}), surveyController.processEditQuestionPage);

router.get('/answers/:id', passport.authenticate('jwt',{session:false}), surveyController.findAnswersBySpecificQuestion);

router.get("/question/:id", surveyController.findSpecificQuestion);

router.get("/:id", surveyController.displayEditQuestionPage);

router.get("/", surveyController.displayQuestionList);

module.exports = router;