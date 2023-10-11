const Blog =require("../models/blogModel") 
const ErrorHander=require("../utils/ErrorHander")
const asyncErrors = require("../utils/asyncErrors")
const cloudinary = require("cloudinary")
exports.createBlog=asyncErrors(async (req,res,next)=>{
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];
  
  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "portfolio",
    });
    
    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  
  req.body.images = imagesLinks;
  const blog=await Blog.create(req.body)
    res.status(201).json({
        success:true,
        blog
    })

})
exports.getAllBlog=asyncErrors(async (req,res,next)=>{
    const blog=await Blog.find(req.body)
    res.status(201).json({
        success:true,
        blog
    })

})
exports.getBlogDetails=asyncErrors(async (req,res,next)=>{
    const blog=await Blog.findById(req.params.id)
    res.status(201).json({
        success:true,
        blog
    })

})
exports.DeleteBlog=asyncErrors(async (req,res,next)=>{

    let blog=await Blog.findById(req.params.id)
    
    blog.deleteOne()
    res.status(201).json({
        success:true,
    })

})