// Get all the required packages
var express = require("express");
var bodyParser = require("body-parser");
var handleMessage = require("./lib/handleMessage");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 3000);

app.post("/message", (req, res) => {
  handleMessage(req.body);
  res.statusCode = 204;
  res.end();
});

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

// Notify about the starting of the server
app.listen(app.get("port"), () => {
  console.log(
    `Server started at the port https://localhost:${app.get("port")}`
  );
});
