const mongoose=require('mongoose')

let MONGODB=process.env.MONGODB_URI;
console.log(MONGODB);
exports.connectDB=async()=>{
    await mongoose.connect(MONGODB)
    console.log("database connected");
}