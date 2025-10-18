const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/bagbae")
  .then(function () {
    console.log("Connected to mongodb");
  })
  .catch(function (err) {
    console.log(err);
  });

module.exports = mongoose.connection;
