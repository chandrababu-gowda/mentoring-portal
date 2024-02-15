const express = require("express");
const studentRouter = require("./routes/student");
const facultyRouter = require("./routes/faculty");

const app = express();
app.use(express.json());

app.use("/", studentRouter);
app.use("/faculty", facultyRouter);

// Custom 404 page
app.use((req, res) => {
  res.status(404);
  res.render("404");
});

// Custom 500 page
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500);
  res.render("500");
});

module.exports = app;
