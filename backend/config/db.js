const mongoose = require("mongoose");

const dburl = "mongodb+srv://nilanka:1234@cluster0.e4qgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery",true,"useNewUrlParser",true);

const connection = async () => {
    try{
        await mongoose.connect(dburl);
        console.log("MongoDB connected.");

    }catch(e){
        console.error(e.message);
        process.exit();
    }
};
module.exports = connection;