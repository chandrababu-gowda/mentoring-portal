const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  qid: String,
  usn: String,
  id: String,
  question: String,
  answer: String,
  isAnswered: Boolean,
  hideUsn: Boolean,
  date: Date,
});

module.exports = mongoose.model("question", questionSchema);
