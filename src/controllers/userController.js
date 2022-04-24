const jwt = require("jsonwebtoken");
const { findByIdAndUpdate, findOneAndUpdate } = require("../models/userModel");
const userModel = require("../models/userModel");
//#################################################################################
const createUser =async function(req,res){
      try { let userData = req.body
            if(!req.body.firstName|| !req.body.mobile ) return res.status(400).send({msg:"firstname and mobile number is mandanory"})
            let userCreated = await userModel.create(userData)
            res.status(201).send({msg:userCreated})}
      catch(error)
          {
            // console.log(error)
            res.status(500).send({msg:"error",error:error.message})
          }
}
//#################################################################################
const loginUser =async function(req,res) {
    try{  let emailId1 =req.body.emailId
      let password1=req.body.password
      let userDetails =await userModel.findOne({ emailId:emailId1 , password:password1})
      if(!userDetails)  return res.status(400).send({status:false,msg:"No user found with provided email and password"})
      let token = await jwt.sign({  userId: userDetails._id.toString(),
                                  batch: "Uranium",
                                  organisation: "FunctionUp",},"functionup uranium tejasvi")
      
      console.log(userDetails)
      res.setHeader("x-auth-token", token);
      res.status(201).send({status:true,msg:token})}

    catch(error)
    {
      res.status(500).send({status:false,msg:error.message})
    }

}
//#################################################################################
const getUserData = async function(req,res){
    try{  let Id = req.params.userId
      // let headertoken= req.headers["x-auth-token"]
      // if(!headertoken) headertoken =req.headers["X-Auth-Token"]
      // if(!headertoken) return res.send({status:false,msg:"please provide the token header"})

      // let verifiedToken = jwt.verify(headertoken,"functionup uranium tejasvi")
      // if(!verifiedToken) return res.send({status:false,msg:"token is invalid"})

      // let uservalid = await userModel.findById({_id:Id})
      // if(!uservalid) return res.send({status:false,msg:"No such user exists"})

      res.status(200).send({ status: true, data: uservalid });}

    catch(error)
    {
      res.status(500).send({status:false,msg:error.message})
    }

}
//#################################################################################
const updateUser = async function (req, res) {
    try{  let Id = req.params.userId
    // let headertoken= req.headers["x-auth-token"]
    // if(!headertoken) headertoken =req.headers["X-Auth-Token"]
    // if(!headertoken) return res.send({status:false,msg:"please provide the token header"})

    // let verifiedToken = jwt.verify(headertoken,"functionup uranium tejasvi")
    // if(!verifiedToken) return res.send({status:false,msg:"token is invalid"})

    // let uservalid = await userModel.findById({_id:Id})
    // if(!uservalid) return res.send({status:false,msg:"No such user exists"})
    
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: Id }, userData,{new:true});
    res.status(201).send({ status: true, data: updatedUser });}

    catch(error)
    {
      res.status(500).send({status:false,msg:error.message})
    }
};
//#################################################################################
const deleteUser = async function(req,res){
    try{let Id = req.params.userId
    // let headertoken= req.headers["x-auth-token"]
    // if(!headertoken) headertoken =req.headers["X-Auth-Token"]
    // if(!headertoken) return res.send({status:false,msg:"please provide the token header"})

    // let verifiedToken = jwt.verify(headertoken,"functionup uranium tejasvi")
    // if(!verifiedToken) return res.send({status:false,msg:"token is invalid"})

    // let uservalid = await userModel.findById({_id:Id})
    // if(!uservalid) return res.send({status:false,msg:"No such user exists"})

    let updatedUser = await userModel.findOneAndUpdate({ _id: Id },{isDeleted:true},{new:true});
    res.status(201).send({ status: true, data: updatedUser });}

    catch(error)
    {
      res.status(500).send({status:false,msg:error.message})
    }
}
//#################################################################################
const updatedOwnOnly = async function(req,res){
    try{    let Id = req.params.userId
        let headertoken= req.headers["x-auth-token"]
        // if(!headertoken) headertoken =req.headers["X-Auth-Token"]
        // if(!headertoken) return res.send({status:false,msg:"please provide the token header"})

        let verifiedToken = jwt.verify(headertoken,"functionup uranium tejasvi")
        // if(!verifiedToken) return res.send({status:false,msg:"token is invalid"})

        // let uservalid = await userModel.findById({_id:Id})
        // if(!uservalid) return res.send({status:false,msg:"No such user exists"})

        let verifiedId =verifiedToken.userId
        if(Id!=verifiedId)  return res.status(403).send({status:false,msg:"You cant modify other user details"})
        let updatedOwnOnly =await userModel.findOneAndUpdate({Id},req.body,{new:true})
        res.send({status:true,msg:updatedOwnOnly})}

        catch(error)
        {
          res.status(500).send({status:false,msg:error.message})
        }
}
//#################################################################################


module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser=deleteUser;
module.exports.updatedOwnOnly=updatedOwnOnly

// //#################################################################################
// const createUser =async function(req,res){
//   let userData = req.body
//   let userCreated = await userModel.create(userData)
//   res.send({msg:userCreated})
// }
// //#################################################################################
// const loginUser =async function(req,res) {
//   let emailId1 =req.body.emailId
//   let password1=req.body.password
//   let userDetails =await userModel.findOne({ emailId:emailId1 , password:password1})
//   if(!userDetails)  return res.send({status:false,msg:"No user found with provided email and password"})
//   let token = await jwt.sign({  userId: userDetails._id.toString(),
//                                batch: "Uranium",
//                                organisation: "FunctionUp",},"functionup uranium tejasvi")
  
//   console.log(userDetails)
//   res.setHeader("x-auth-token", token);
//   res.send({status:true,msg:token})

// }
// //#################################################################################
// const getUserData = async function(req,res){
//   let Id = req.params.userId
//   // let headertoken= req.headers["x-auth-token"]
//   // if(!headertoken) headertoken =req.headers["X-Auth-Token"]
//   // if(!headertoken) return res.send({status:false,msg:"please provide the token header"})

//   // let verifiedToken = jwt.verify(headertoken,"functionup uranium tejasvi")
//   // if(!verifiedToken) return res.send({status:false,msg:"token is invalid"})

//   // let uservalid = await userModel.findById({_id:Id})
//   // if(!uservalid) return res.send({status:false,msg:"No such user exists"})

//   res.send({ status: true, data: uservalid });

// }
// //#################################################################################
// const updateUser = async function (req, res) {
//   let Id = req.params.userId
//   // let headertoken= req.headers["x-auth-token"]
//   // if(!headertoken) headertoken =req.headers["X-Auth-Token"]
//   // if(!headertoken) return res.send({status:false,msg:"please provide the token header"})

//   // let verifiedToken = jwt.verify(headertoken,"functionup uranium tejasvi")
//   // if(!verifiedToken) return res.send({status:false,msg:"token is invalid"})

//   // let uservalid = await userModel.findById({_id:Id})
//   // if(!uservalid) return res.send({status:false,msg:"No such user exists"})
  
//   let userData = req.body;
//   let updatedUser = await userModel.findOneAndUpdate({ _id: Id }, userData,{new:true});
//   res.send({ status: true, data: updatedUser });
// };
// //#################################################################################
// const deleteUser = async function(req,res){
//   let Id = req.params.userId
//   // let headertoken= req.headers["x-auth-token"]
//   // if(!headertoken) headertoken =req.headers["X-Auth-Token"]
//   // if(!headertoken) return res.send({status:false,msg:"please provide the token header"})

//   // let verifiedToken = jwt.verify(headertoken,"functionup uranium tejasvi")
//   // if(!verifiedToken) return res.send({status:false,msg:"token is invalid"})

//   // let uservalid = await userModel.findById({_id:Id})
//   // if(!uservalid) return res.send({status:false,msg:"No such user exists"})

//   let updatedUser = await userModel.findOneAndUpdate({ _id: Id },{isDeleted:true},{new:true});
//   res.send({ status: true, data: updatedUser });
// }
// //#################################################################################
// const updatedOwnOnly = async function(req,res){
//   let Id = req.params.userId
//   let headertoken= req.headers["x-auth-token"]
//   if(!headertoken) headertoken =req.headers["X-Auth-Token"]
//   if(!headertoken) return res.send({status:false,msg:"please provide the token header"})

//   let verifiedToken = jwt.verify(headertoken,"functionup uranium tejasvi")
//   if(!verifiedToken) return res.send({status:false,msg:"token is invalid"})

//   let uservalid = await userModel.findById({_id:Id})
//   if(!uservalid) return res.send({status:false,msg:"No such user exists"})

//   let verifiedId =verifiedToken.userId
//   if(Id!=verifiedId)  return res.send({status:false,msg:"You cant modify other user details"})
//   let data = req.body
//   uservalid.age=data.age
//   res.send({status:true,msg:uservalid})

// }
// //#################################################################################


// const createUser = async function (abcd, xyz) {
//   //You can name the req, res objects anything.
//   //but the first parameter is always the request 
//   //the second parameter is always the response
//   let data = abcd.body;
//   let savedData = await userModel.create(data);
//   console.log(abcd.newAtribute);
//   xyz.send({ msg: savedData });
// };

// const loginUser = async function (req, res) {
//   let userName = req.body.emailId;
//   let password = req.body.password;

//   let user = await userModel.findOne({ emailId: userName, password: password });
//   if (!user)
//     return res.send({
//       status: false,
//       msg: "username or the password is not corerct",
//     });

//   // Once the login is successful, create the jwt token with sign function
//   // Sign function has 2 inputs:
//   // Input 1 is the payload or the object containing data to be set in token
//   // The decision about what data to put in token depends on the business requirement
//   // Input 2 is the secret
//   // The same secret will be used to decode tokens
//   let token = jwt.sign(
//     {
//       userId: user._id.toString(),
//       batch: "thorium",
//       organisation: "FUnctionUp",
//     },
//     "functionup-thorium"
//   );
//   res.setHeader("x-auth-token", token);
//   res.send({ status: true, data: token });
// };

// const getUserData = async function (req, res) {
//   let token = req.headers["x-Auth-token"];
//   if (!token) token = req.headers["x-auth-token"];

//   //If no token is present in the request header return error
//   if (!token) return res.send({ status: false, msg: "token must be present" });

//   console.log(token);
  
//   // If a token is present then decode the token with verify function
//   // verify takes two inputs:
//   // Input 1 is the token to be decoded
//   // Input 2 is the same secret with which the token was generated
//   // Check the value of the decoded token yourself
//   let decodedToken = jwt.verify(token, "functionup-thorium");
//   if (!decodedToken)
//     return res.send({ status: false, msg: "token is invalid" });

//   let userId = req.params.userId;
//   let userDetails = await userModel.findById(userId);
//   if (!userDetails)
//     return res.send({ status: false, msg: "No such user exists" });

//   res.send({ status: true, data: userDetails });
// };
// const updateUser = async function (req, res) {
// // Do the same steps here:
// // Check if the token is present
// // Check if the token present is a valid token
// // Return a different error message in both these cases

//   let userId = req.params.userId;
//   let user = await userModel.findById(userId);
//   //Return an error if no user with the given id exists in the db
//   if (!user) {
//     return res.send("No such user exists");
//   }

//   let userData = req.body;
//   let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
//   res.send({ status: updatedUser, data: updatedUser });
// };