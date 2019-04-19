
let mongoose = require("mongoose");

// create a model class
let questionSchema = mongoose.Schema(
  {
    
    username : String,
    user_id : String,
    data : String,
    lifetime : Number
  },
  {
    collection: "surveyQuestion"
  }
);

module.exports = mongoose.model("surveyQuestion", questionSchema);
