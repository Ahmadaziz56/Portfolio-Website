const express=require("express")
const { createForm, getAllForms, getFormDetails, deleteForm } = require("../controllers/formController")
const router=express.Router()
router.route("/create/form").post(createForm)
router.route("/form").get(getAllForms)
router.route("/form/:id").get(getFormDetails).delete(deleteForm)
module.exports=router

