const express=require("express")
const { createEducationQuality, getAllPEducationQuality, deleteEducationQuality, EducationQualityDetails } = require("../controllers/EducationQualityController")
const router=express.Router()
router.route("/create/education/quality").post(createEducationQuality)
router.route("/education/quality").get(getAllPEducationQuality)
router.route("/education/quality/:id").delete(deleteEducationQuality).get(EducationQualityDetails)
module.exports=router