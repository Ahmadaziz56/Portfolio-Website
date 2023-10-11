const express=require("express")
const { createBlog, getAllBlog, getBlogDetails, DeleteBlog } = require("../controllers/blogController")
const router=express.Router()
router.route("/create/blog").post(createBlog)
router.route("/blog").get(getAllBlog)
router.route("/blog/:id").get(getBlogDetails).delete(DeleteBlog)
module.exports=router