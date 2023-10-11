const mongoose = require("mongoose");

const connectDataBase = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((data) => {
        console.log(`MongoDB is connected to ${data.connection.host}`);
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });
};

module.exports = connectDataBase;
