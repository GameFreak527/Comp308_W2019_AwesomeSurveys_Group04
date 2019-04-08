
let mongoose = require("mongoose");

// create a model class
let questionSchema = mongoose.Schema(
  {
    user_id : String,
    data : String,
    lifetime : {
      type: Number,
      default: "120000",
      trim: true,
      required: "Lifetime is required"
    }
  },
  {
    collection: "surveyQuestion"
  }
);

module.exports = mongoose.model("surveyQuestion", questionSchema);
