const BatchModel = require("../models/batchModel")

//1. Write an api POST /batches that creates a batch from the details in the request body. 
//Please note that the program should be an enum with the following allowed values only - backend and frontend

const createBatch = async function(req,res) {
    const batch =req.body
    let batches= await BatchModel.create(batch)
    res.send({data:batch})
}

module.exports.createBatch=createBatch