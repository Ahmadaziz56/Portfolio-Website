const mongoose = require("mongoose");

const protfolioSchema = new mongoose.Schema({
  mainHeading: {
    type: String,
    required: [true, "Please Enter Heading"],
  },
  client: {
    type: String,
    required: [true, "Please Enter Client"],
  },
  images:[
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  likes: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  smallIcon: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Portfolio", protfolioSchema);
