const express=require("express")
const path=require("path")
const app=express()
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" })
}
const Portfolio=require("./routes/portfolioRoute")
const EducationQuality=require("./routes/educationQualityRoute")
const JobExperience=require("./routes/jobExperienceRoute")
const Blog=require("./routes/blogRoute")
const Form=require("./routes/formRoute")
const Profile=require("./routes/portfolioRoute")
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/api/v1",Portfolio)
app.use("/api/v1",EducationQuality)
app.use("/api/v1",Form)
app.use("/api/v1",JobExperience)
app.use("/api/v1",Blog)
app.use("/api/v1",Profile)
app.use(express.static(path.join(__dirname,"../ahmad-web/build")))
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../ahmad-web/build/index.html"))
})
module.exports=app