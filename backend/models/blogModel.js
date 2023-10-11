const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, "Please Enter Heading"],
  },
  images:[
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date:{
    type: Date ,
    default:Date.now
  }
});

module.exports = mongoose.model("Blog", BlogSchema);
