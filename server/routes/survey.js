let express = require("express");
let router = express.Router();

let surveyController = require('../controllers/survey');

router.post("/addquestion", surveyController.processAddQuestion);

router.post("/addanswer", surveyController.processAddAnswer);

router.get("/delete/:id", surveyController.performQuestionDelete);


router.post("/editquestion/:id", surveyController.processEditQuestionPage);

router.get('/answers/:id', surveyController.findAnswersBySpecificQuestion);

router.get("/question/:id", surveyController.findSpecificQuestion);

router.get("/:id", surveyController.displayEditQuestionPage);

router.get("/", surveyController.displayQuestionList);

module.exports = router;