const mongoose = require("mongoose");

const jobExperienceSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, "Please Enter Heading"],
  },
  duration: {
    type: String,
    required: [true, "Please Enter Client"],
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

module.exports = mongoose.model("JobExperience", jobExperienceSchema);
