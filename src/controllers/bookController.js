// const authorModel = require("../models/authorModel")
// const bookModel = require("../models/bookModel")
// const publisherModel = require("../models/publisherModel")
// //#############################################################################

// //3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 

// const createBook = async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     let author = await authorModel.findById(book.author_ref)  // 62588b1466d31d5234fa1421
//     let publisher = await publisherModel.findById(book.publisher_ref)

//     if (book.author_ref && book.publisher_ref) {
//         if (author != null && publisher != null) {
//             res.send({ msg: bookCreated })
//         }
//         else if (author == null && publisher != null) {
//             res.send({ msg: "Please provide correct author id " })
//         }
//         else if (author != null && publisher == null) {
//             res.send({ msg: "Please provide correct publisher id" })
//         }
//         else {
//             res.send({ msg: "Please provide correct author id and publisher id" })
//         }
//     }
//     else if (book.publisher_ref) {
//         res.send({ msg: "please provide author_ref" })   //if not provideing author ref
//     }
//     else if (book.author_ref)  {                                 //"publisher_ref":"6259239d3579fee51ae1fa64"
//         res.send({ msg: "please provide publisher_ref" })
//     }
//     else {
//         res.send({ msg: "Please provide both author_ref and publisher_ref" })
//     }

// }

// //#############################################################################################
// //4. Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 

// const getBooksData = async function (req, res) {
//     // let books = await bookModel.find().populate('publisher_ref').populate('author_ref')
//     let books = await bookModel.find().populate([{ path: 'publisher_ref' }, { path: 'author_ref' }])
//     res.send({ data: books })
// }
// //#############################################################################################

// //Create a new PUT api /books and perform the following two operations
// // a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.

// const books = async function (req , res) {
//     const books = await bookModel.find().updateMany(
//         { publisher_ref:["625b2ca3719b47bdcd6cd4ba","625923403579fee51ae1fa60"]},
//         { isHardCover:true }
//     )
//     res.send({msg:"isHardCover is Updated to True"})
// }
// //###############################################################################################

// // b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60) 

// const books1= async function (req, res) {
//     let author=await authorModel.find()    // acesss
//     let arr=[]
//     for(let i=0;i<author.length;i++)
//     {
//         if(author[i].rating>3.5)
//         {
//             arr.push(author[i]._id)
//         }
//     }
//     console.log(arr);
//     let book1 = await bookModel.find().updateMany(
//         {author_ref:arr},                           
//         {$inc:{price:10}}
//     )
    
//         res.send({book1, msg:"Book price is updated by 10"})
//     // res.send({data: book1})
// }

// //###############################################################################################
// // const getBooksWithAuthorDetails = async function (req, res) {
// //     let specificBook = await bookModel.find().populate('author_id')
// //     res.send({data: specificBook})

// // }

// module.exports.createBook = createBook
// module.exports.getBooksData = getBooksData
// module.exports.books=books
// module.exports.books1=books1
// // module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
