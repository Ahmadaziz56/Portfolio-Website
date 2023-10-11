const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, "Please Enter Heading"],
  }
});

module.exports = mongoose.model("User", BlogSchema);
