const cntSchema=require('../model/contactSchema')
exports.CreateContact=async(req,res)=>{
let playload={
    fname:req.body.fname,
    lname:req.body.lname,
    phone:req.body.phone,
    loc:req.body.loc
}
await cntSchema.create(playload)
    res.json({success:true,massage:'succesfully cantact saved',playload})

}



exports.allContacts=async(req,res)=>{
    let playload=await cntSchema.find()
     res.json({success:true,massage:'succesfully fetched cantacts',playload})
}

exports.updateContacts=async(req,res)=>{
    let playload=await cntSchema.findOne({_id:req.params.id})
    playload.fname=req.body.fname;
    playload.lname=req.body.lname;
    playload.phone=req.body.phone;
    playload.loc=req.body.loc;

    playload.save()
    res.json({success:true,massage:'succesfully fetched single cantacts',playload})
}

exports.singleContacts=async(req,res)=>{
    let playload=await cntSchema.findOne({_id:req.params.id})
     res.json({success:true,massage:'succesfully fetched single cantacts',playload})
}


exports.dropContacts=async(req,res)=>{
    let playload=await cntSchema.deleteOne({_id:req.params.id})
     res.json({success:true,massage:'succesfully droped cantacts',playload})
}