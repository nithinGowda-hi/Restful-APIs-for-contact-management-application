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





// package.json
// server
// server port and db connection
//db connection



//! Application level middleware
//The middlewares which are used to apply on entire application.
//Mainly this middlewares will be used in server,js file or main javascript file.

//! Router level middlewares
//the middlewares which are used on specifice routers are called router level middlewares

//!Built-in middlewares
//This are the middlewares which are already present in express
//This are used to extract the data fron url,from json formate ,etc

//!Third-party middlewares
//The middlewares which are not present in express,to use them we have to install them
//?Example:
// multer,json web token,ect

//!Error handling middlewares
//The middlewares which are uesd to handle the error are called error handling middlewares




//!HTTP module:
//HTTP stand for: Hypertext transfor protocol
//HTTP is used to communicate or transfer the data between client and server
//It is a stateless protocol
//? stateless means it will not hold the information of previous reQuest and it will treate each and every reQuest has new REQuest
//it is built in module in nodejs so no need to install it again
//Importing hhtp is manditory by useing REQURIE ()
//the main. use of http is to create server 

//!HTTP ()
//this ()are used to perform different action on serource
//there are several methods in Http and some of important methods are 
//?get: it is used to retrive/fetch the data from the serever
//?post:it is used to post/send the data to the server
//?patch: it is used to update the data in server parcially
//?put:it is used to update the data in the server completely

//todo ---- note: patch is used to update only the reQuried field where as put will update /replace the ebtire data with new data
//?delet:it is used to delet the data from the server