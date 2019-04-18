let express = require("express");
let passport = require("passport");


let DB = require('../config/db');

let questionModel = require('../models/surveyQuestion');
let answerModel = require('../models/surveyAnswer');

//Display the list of questions 
module.exports.displayQuestionList = (req, res, next) => {
  questionModel.find((err, questionList) => {
    if (err) {
      return console.error(err);
    } else {
      res.json({
        success: true,
        questionList: questionList,
        user: req.user
      });
    }
  });
};

//Add questions to the DB
module.exports.processAddQuestion = (req, res, next) => {
  let newQuestion = questionModel({
    username: req.body.username,
    user_id: req.body.user_id,
    data: req.body.data
  });

  questionModel.create(newQuestion, (err, questionModel) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Added New Question"
      });
    }
  });
};

//Add answer to DB
module.exports.processAddAnswer = (req, res, next) => {
  let newAnswer = answerModel({
    username: req.body.username,
    user_id: req.body.user_id,
    question_id: req.body.question_id,
    data: req.body.data
  });

  answerModel.create(newAnswer, (err, answerModel) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Added New Answer"
      });
    }
  });
};

//Performs the edit of question
module.exports.processEditQuestionPage = (req, res, next) => {
  let id = req.params.id;

  let updatedQuestion = questionModel({
    _id: id,
    username: req.body.username,
    user_id: req.body.user_id,
    data: req.body.data,
    lifetime: req.body.lifetime
  });

  questionModel.update({
    _id: id
  }, updatedQuestion, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Edited Question",
        question: updatedQuestion
      });
    }
  });
};

//Shows the content to the edit page
module.exports.displayEditQuestionPage = (req, res, next) => {
  let id = req.params.id;

  questionModel.findById(id, (err, questionObject) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Displayed Question to Edit",
        question: questionObject
      });
    }
  });
};
// Delete specific survey or question
module.exports.performQuestionDelete = (req, res, next) => {
  let id = req.params.id;
  questionModel.remove({
    _id: id
  }, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Deleted Question"
      });
    }
  });
};

module.exports.findSpecificQuestion = (req, res, next) => {
  let id = req.params.id;
  questionModel.findById(id, (err, question) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Displayed One Question",
        question
      });
    }
  });
}

module.exports.findAnswersBySpecificQuestion = (req, res, next) => {
  let id = req.params.id;
  answerModel.find({
    'question_id': id
  }, (err, answerList) => {
    if (err) {
      return console.error(err);
    } else {
      res.json({
        success: true,
        answerList: answerList
      });
    }
  });
}