const express=require("express")
const app=express()
require('dotenv').config()

const routing=require("./router/cntRouter")

const {connectDB}=require("./config/db")
connectDB()

// const {cntSchema}=require("./model/contactSchema")
// console.log(cntSchema)
let PORT=process.env.PORT;


app.get('/',(req,res)=>{
    res.send("contact application")
})


app.use(express.json())
app.use('/api',routing)

app.listen(PORT,err=>{
    if (err)throw err;
    console.log(`server is running on port ${PORT}`)
})









