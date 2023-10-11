const express=require("express")
const { createJobExperience, getAllJobExperience, deleteJobExperienceQuality, jobExperienceDetails } = require("../controllers/JobExperienceController")
const router=express.Router()
router.route("/create/job/experience").post(createJobExperience)
router.route("/job/experience").get(getAllJobExperience)
router.route("/job/experience/:id").delete(deleteJobExperienceQuality).get(jobExperienceDetails)
module.exports=router