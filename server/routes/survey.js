let express = require("express");
let router = express.Router();

let passport = require('passport');

let surveyController = require('../controllers/survey');

router.post("/addquestion",passport.authenticate('jwt',{session:false}), surveyController.processAddQuestion);

router.post("/addanswer", surveyController.processAddAnswer);

router.get("/delete/:id", passport.authenticate('jwt',{session:false}),surveyController.performQuestionDelete);


router.post("/editquestion/:id", passport.authenticate('jwt',{session:false}), surveyController.processEditQuestionPage);

router.get('/answers/:id',  surveyController.findAnswersBySpecificQuestion);

router.get("/question/:id", surveyController.findSpecificQuestion);

router.get("/:id", surveyController.displayEditQuestionPage);

router.get("/", surveyController.displayQuestionList);

module.exports = router;