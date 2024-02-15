const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  usn: { require: true, type: String },
  password: String,
  name: String,
  phone: Number,
  email: String,
  branch: String,
  sem: Number,
});

module.exports = mongoose.model("student", studentSchema);
