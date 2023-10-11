const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, "Please Enter Heading"],
  },
  duration: {
    type: String,
    required: [true, "Please Enter duration"],
  },
  special: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("EducationQuality", educationSchema);
