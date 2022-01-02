//initialization
const express = require("express");

const app = express();
const mongoose = require("mongoose");
const Note = require("./models/note");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose
  .connect(
    "mongodb+srv://sadid:badboy502797@cluster0.hwpcs.mongodb.net/notesdb"
  )
  .then(function () {
    app.get("/", function (req, res) {
      const response = { message: "API WORKS" };
      res.json(response);
    });
    const notesRoute = require("./routes/notesRoutes");
    app.use("/notes", notesRoute);
  });

app.listen(5000, function () {
  console.log("Server is Started at PORT:5000");
});
