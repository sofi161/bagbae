const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config");

mongoose
  .connect(`${config.get("MONGODB_URI")}/bagbae`)
  .then(function () {
    dbgr("Connected to mongodb");
  })
  .catch(function (err) {
    dbgr(err);
  });

module.exports = mongoose.connection;
