const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const mid1 = async function ( req,res,next){
    let Id = req.params.userId
    let headertoken= req.headers["x-auth-token"]
    if(!headertoken) headertoken =req.headers["X-Auth-Token"]
    if(!headertoken) return res.status(400).send({status:false,msg:"please provide the token header"})
  
    let verifiedToken = jwt.verify(headertoken,"functionup uranium tejasvi")
    if(!verifiedToken) return res.status(401).send({status:false,msg:"token is invalid"})
  
    let uservalid = await userModel.findById({_id:Id}) ///just pass id
    if(!uservalid) return res.status(400).send({status:false,msg:"No such user exists"})

    next()
}

module.exports.mid1=mid1