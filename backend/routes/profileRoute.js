const express=require("express")
const { createProfile, getAllProfile, checkUser } = require("../controllers/ProfileController")
const { getAllBlog } = require("../controllers/blogController")
const router=express.Router()
router.route("/create/profile").post(createProfile)
router.route("/profile").get(getAllProfile)
router.route("/authenticated").post(checkUser)
module.exports=router

