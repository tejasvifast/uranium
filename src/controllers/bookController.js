const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
// const bookModel = require("../models/bookModel")
//#####################################################
//#####################################################

const createBook= async function (req, res) {
    let data= req.body
    if(data.author_id)
    {let savedData= await BookModel.create(data)
    res.send({msg: savedData})}
    else{"author_id is mandantory"}
}
const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
//#####################################################
//List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”.
// Then next query will get the list of books with that author_id )
const bookByChetan = async function(req, res){
    let savedData = await AuthorModel.find({author_name:"Chetan Bhagat"})
    let data1 = savedData[0].author_id
    console.log(data1);
    let savedData1 = await BookModel.find({author_id : data1})
    res.send({msg: savedData1})
}
//#####################################################
//find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response
const authorByBook = async function(req , res){
    let savedData = await BookModel.findOneAndUpdate(
        {name:"Two states"},
        {$set :{price : 100 }},
        {new :true }
    )
    let savedData1 =await AuthorModel.find({author_id:savedData.author_id})
    console.log(savedData.price)
    console.log(savedData1[0].author_name)
    res.send({Author_name :savedData1[0].author_name , price: savedData.price  } )
}
//######################################################
//Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books
const bookByCost = async function (req,res){

    let savedData =await BookModel.find({price :{ $gte: 50, $lte: 100}}).select({author_id:1,_id:0})    //
    let savedData1 = savedData.map(x=> x.author_id)     //stroing id in array
    let savedData2 =savedData1.filter((x,y)=> savedData1.indexOf(x)===y )  // 
    let arr =[]
    for(let i=0;i<savedData2.length;i++){
        let id =savedData2[i]
        let savedData3 =await AuthorModel.find ({author_id :id}).select({author_name:1,_id:0})
        arr.push(savedData3)
    }
    res.send(arr)
} 

//######################################################
//######################################################
// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.bookByChetan= bookByChetan
module.exports.authorByBook= authorByBook
module.exports.bookByCost= bookByCost


// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
