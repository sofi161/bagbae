const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner.model");

router.get("/", (req, res) => {
  res.send("workinggggg");
});

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res.status(501).send("can't create more than 1 owner");
    }
    res.send("we can create a new owner");
    // let {fullname, email, password } = req.body;
    // let newOwner = ownerModel.create({
    //   fullname, email, password
    // })
  });
}
module.exports = router;
