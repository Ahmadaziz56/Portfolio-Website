const JobExperience=require("../models/jobExperienceModel")
const ErrorHander=require("../utils/ErrorHander")
const asyncErrors = require("../utils/asyncErrors")
exports.createJobExperience=asyncErrors(async (req,res,next)=>{

  const jobExperience=await JobExperience.create(req.body)
    res.status(201).json({
        success:true,
        jobExperience
    })

})
exports.getAllJobExperience=asyncErrors(async (req,res,next)=>{

    const jobExperience=await JobExperience.find(req.body)
    res.status(201).json({
        success:true,
        jobExperience
    })

})
exports.jobExperienceDetails=asyncErrors(async (req,res,next)=>{

    const jobExperience=await JobExperience.findById(req.params.id)
    res.status(201).json({
        success:true,
        jobExperience
    })

})
exports.deleteJobExperienceQuality=asyncErrors(async (req,res,next)=>{

    let jobExperience=await JobExperience.findById(req.params.id)
    jobExperience.deleteOne()
    res.status(201).json({
        success:true,
        jobExperience
    })

})