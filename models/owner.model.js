const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  contact: Number,
  gstin: String,
  picture: String,
});

const ownerModel = mongoose.model("owner", ownerSchema);

module.exports = ownerModel;
