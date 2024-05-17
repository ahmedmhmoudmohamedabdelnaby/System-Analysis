const mongoose = require("mongoose");

mongoose
  .connect("mongodb://feedback_db:27017/feedbackdb", { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
   