const express=require("express")
const { createPortfolio,getAllPortFolio, getPortFolioDetails, updatePortFolio, DeletePortFolio,createUser } = require("../controllers/portfolioControllers")
const router=express.Router()
router.route("/create/portfolio").post(createPortfolio)
router.route("/portfolio").get(getAllPortFolio)
router.route("/user").post(createUser)
router.route("/portfolio/:id").get(getPortFolioDetails).put(updatePortFolio).delete(DeletePortFolio)
module.exports=router