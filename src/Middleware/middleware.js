const { route } = require("../routes/route");
const moment =require("moment")

const middleware1 = function(req,res,send){
    let today = moment();
    let path =req.path
    let ip1 =req.ip
    console.log(req);
    console.log(today.format("DD-MM-YYYY hh:mm:ss"),ip1,path)
}

module.exports.middleware1=middleware1