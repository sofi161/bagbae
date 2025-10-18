const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("workinggggg");
});

module.exports = router;
