const EducationQuality=require("../models/EducationQualityModel")
const ErrorHander=require("../utils/ErrorHander")
const asyncErrors = require("../utils/asyncErrors")
exports.createEducationQuality=asyncErrors(async (req,res,next)=>{

  const educationQuality=await EducationQuality.create(req.body)
    res.status(201).json({
        success:true,
        educationQuality
    })

})
exports.getAllPEducationQuality=asyncErrors(async (req,res,next)=>{

    const educationQuality=await EducationQuality.find(req.body)
    res.status(201).json({
        success:true,
        educationQuality
    })

})
exports.EducationQualityDetails=asyncErrors(async (req,res,next)=>{

    const educationQuality=await EducationQuality.findById(req.params.id)
    res.status(201).json({
        success:true,
        educationQuality
    })

})
exports.deleteEducationQuality=asyncErrors(async (req,res,next)=>{

    let educationQuality=await EducationQuality.findById(req.params.id)
    educationQuality.deleteOne()
    res.status(201).json({
        success:true,
        educationQuality
    })

})