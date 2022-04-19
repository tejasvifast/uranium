const DeveloperModel = require("../models/developerModel")
const BatchModel = require("../models/batchModel")
//2. Write an api POST  /developers that creates a developer from the details in the request body.
// Please note that the gender should be an enum with the following allowed values - male, female and other. Also, batch attribute is a reference to the batches collection.

const createDeveloper = async function (req ,res ){
    const developer = req.body
    const developers = await DeveloperModel.create(developer)
    res.send({data:developers})
}
//3. Write an api GET /scholarship-developers that fetches the list of eligible developers for scholarship. 
//An eligible developer is female with percentage greater than or equal to 70

const scholarshipDevelopers = async function(req,res){
    const scholarshipDevelopers = await DeveloperModel.find({percentage:{$gte:70},gender:"female"})
    res.send({data:scholarshipDevelopers})
}

//4. Write an api GET /developers?percentage=value1&program=value2 that only returns the developers for a given program with a percentage greater than or equal to the received value. 
//Please note the batch name and the program values are received in the request as query params

const  developersQuery = async function(req,res){
    const query1 = req.query    // { percentage: '70', program: 'Radium' }  these are paramas
    console.log(query1);      
    let batch1 = await BatchModel.find({name:query1.program}).select({_id:1})    //select the id of radium here
    id1=batch1[0]._id.toString()      // to change objectId to string
    let developer = await DeveloperModel.find({percentage:{$gte:query1.percentage}, batch:id1})    //now just filter the content
    res.send({developer})
    // 
}
module.exports.createDeveloper=createDeveloper
module.exports.scholarshipDevelopers=scholarshipDevelopers
module.exports.developersQuery=developersQuery