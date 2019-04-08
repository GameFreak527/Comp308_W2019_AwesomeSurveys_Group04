let express = require("express");
let router = express.Router();

let surveyController  = require('../controllers/survey');

router.post("/addquestion", surveyController.processAddQuestion);

router.post("/addanswer", surveyController.processAddAnswer);

router.post("/:id", surveyController.performQuestionDelete);

router.post("/editquestion", surveyController.processEditQuestionPage);

router.get("/:id", surveyController.displayEditQuestionPage);

router.get("/", surveyController.displayQuestionList);

module.exports = router;