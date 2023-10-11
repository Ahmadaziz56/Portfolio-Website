const Portfolio=require("../models/portfolio")
const ErrorHander=require("../utils/ErrorHander")
const asyncErrors = require("../utils/asyncErrors")
const cloudinary = require("cloudinary")
const User=require("../models/authenticatedmodel")
exports.createPortfolio=asyncErrors(async (req,res,next)=>{
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
  const portfolio=await Portfolio.create(req.body)
    res.status(201).json({
        success:true,
        portfolio
    })

})
exports.getAllPortFolio=asyncErrors(async (req,res,next)=>{
    const portfolio=await Portfolio.find(req.body)
    res.status(201).json({
        success:true,
        portfolio
    })

})
exports.getPortFolioDetails=asyncErrors(async (req,res,next)=>{
    const portfolio=await Portfolio.findById(req.params.id)
    res.status(201).json({
        success:true,
        portfolio
    })

})
exports.updatePortFolio=asyncErrors(async (req,res,next)=>{
    let portfolio=await Portfolio.findById(req.params.id)
    portfolio=await Portfolio.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
    res.status(201).json({
        success:true,
        portfolio
    })

})
exports.DeletePortFolio=asyncErrors(async (req,res,next)=>{

    let portfolio=await Portfolio.findById(req.params.id)
    
    portfolio.deleteOne()
    res.status(201).json({
        success:true,
    })

})
exports.createUser = asyncErrors(async (req, res, next) => {
  const user=await User.create(req.body)
  const isAuthenticated = (user.password === "AhmadAziz@56");

  if (isAuthenticated) {
    res.status(200).json({
      success: true,
      isAuthenticated: true,
    });
  } else {
    res.status(401).json({
      success: false,
      isAuthenticated: false,
    });
  }
});
exports.checkUser = asyncErrors(async (req, res, next) => {
  const data = req.body;

  const isAuthenticated = (data === "AhmadAziz@56");

  if (isAuthenticated) {
    res.status(200).json({
      success: true,
      isAuthenticated: true,
    });
  } else {
    res.status(401).json({
      success: false,
      isAuthenticated: false,
    });
  }
});