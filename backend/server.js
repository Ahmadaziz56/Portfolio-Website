const app = require("./app")
const connectDataBase = require("./config/connectDataBase")
const cloudinary = require("cloudinary")
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" })
}
process.on("uncaughtException", err => {
    console.log(`error:${err.message}`);
    console.log("server is down")
    process.exit(1);
})
connectDataBase()
cloudinary.config({
    cloud_name: process.env.CLOUNDINARY_NAME,
    api_key: process.env.CLOUNDINARY_API_KEY,
    api_secret: process.env.CLOUNDINARY_API_SECRET,

})
const server = app.listen(process.env.PORT, () => {
    console.log("server is connected")
})

process.on("unhandledRejection", err => {
    console.log(`error:${err.message}`);
    console.log("server is down")
    server.close(() => {
        process.exit(1);
    })
})
