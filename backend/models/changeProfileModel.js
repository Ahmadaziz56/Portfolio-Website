const mongoose=require("mongoos")
const profileSchema = new mongoose.Schema({
    image:{
        public_id: {
            type: String,
          },
          url: {
            type: String,
            required: true,
          },
    }
})
module.exports=mongoose.model("Profile",ProfileSchema)
