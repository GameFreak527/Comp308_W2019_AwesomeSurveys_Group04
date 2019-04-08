
let mongoose = require("mongoose");

// create a model class
let answerSchema = mongoose.Schema(
  {
    user_id : String,
    question_id : String,
    data : String
  },
  {
    collection: "surveyAnswer"
  }
);

module.exports = mongoose.model("surveyAnswer", answerSchema);
