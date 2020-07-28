const express = require("express");
const router = express.Router();
const Data = require("../models/dataModel");
router.get("/", async (req, res) => {
  const result = await Data.find({}, { __v: 0 });
  res.json(result);
});
router.post("/", async (req, res) => {
  const data = new Data(req.body);
  const result = await data.save();
  res.json(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Data.findByIdAndDelete(id);
  res.send("Deleted");
});
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Data.findByIdAndUpdate(id, req.body);
  res.send("Updated");
});
module.exports = router;
