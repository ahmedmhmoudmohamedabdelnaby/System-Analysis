const mongoose = require("mongoose");

mongoose
  .connect("mongodb://note_db:27017/notedb", { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
