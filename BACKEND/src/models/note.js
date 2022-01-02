const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Note", noteSchema);
