var express = require("express");
var app = express();

var mongoose = require("mongoose");

//DB setup
mongoose.connect("mongodb://127.0.0.1:27017/admin");

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
