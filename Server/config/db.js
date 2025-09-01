const mongoose=require("mongoose")
require("dotenv").config()

const database= ()=>{
    mongoose.connect(process.env.MONGOOSE_URI).then(()=>{
        console.log("database connection established")
    }).catch((err)=>{
        console.log("Error occured",err)
    })
}

module.exports=database


