const {Schema, model}=require('mongoose')

let cntSchema=new Schema({
    fname:{
        type:"string",
        required:true
    },
     lname:{
        type:"string",
        required:true
    },
     phone:{
        type:"number",
        required:true
    },
     loc:{
        type:"string",
        required:true,
        enum:['mobile','sim','email']
    },
})
module.exports=model('contact',cntSchema,'cantact')