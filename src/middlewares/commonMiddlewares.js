

const midUserCreate= function ( req, res, next) {
    let head =req.headers
    let isFree = head.isfreeappuser
    if(isFree)
    {next()}
    else
    {res.send({msg:"the request is missing a mandatory header"})}
}

const midOrderCreate = function(req,res,next){
    let head =req.headers
    let isFree = head.isfreeappuser
    if(isFree)
    {next()}
    else
    {res.send({msg:"the request is missing a mandatory header"})}
}



// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
module.exports.midUserCreate= midUserCreate
module.exports.midOrderCreate= midOrderCreate
