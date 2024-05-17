const mongoose = require("mongoose");

mongoose
  .connect("mongodb://contact_db:27017/contactdb", { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
   