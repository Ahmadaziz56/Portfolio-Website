const Profile =require("../models/changeProfileModel") 
const ErrorHander=require("../utils/ErrorHander")
const asyncErrors = require("../utils/asyncErrors")
const cloudinary = require("cloudinary")
exports.createProfile=asyncErrors(async (req,res,next)=>{
    const myCloud =await cloudinary.v2.uploader.upload(req.body.image,{
        folder:"avatars",
        width:150,
        crop:"scale",
        
    })
    const profile = await Profile.create({
        image: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        }
    })
    res.status(201).json({
        success:true,
        profile
    })

})
exports.getAllProfile=asyncErrors(async (req,res,next)=>{
    const profile=await Profile.find(req.body)
    res.status(201).json({
        success:true,
        profile
    })
})

  
  
  
  
  
  