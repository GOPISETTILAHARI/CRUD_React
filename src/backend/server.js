const express = require("express");
const server = express();
const dataRoute = require("./Routes/dataRoute");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect(
  "mongodb+srv://Ani:anianiani@cluster0.2wkhq.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("db");
  }
);
mongoose.set("useFindAndModify", false);
server.use(cors());

server.use(express.json());
server.use("/data", dataRoute);
server.post("/", (req, res) => {
  res.send(req.body);
});
server.listen(5000, () => {
  console.log("server connected");
});
