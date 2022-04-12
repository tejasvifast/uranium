const { Router } = require('express');
const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  ) //to create a new entry..use this api to create 11+ entries in your collection

router.get("/getBooksData", BookController.getBooksData) //

router.get("/bookList", BookController.bookList)   //return gives all the books- their bookName and authorName only 

router.post("/getBooksInYear", BookController.getBooksInYear  )//takes year as input in post request and gives list of all books published that year

router.post("/getParticularBooks", BookController.getParticularBooks )//take any input and use it as a condition to fetch books that satisfy that condition

router.get("/getXINRBooks", BookController.getXINRBooks  )//request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR”

router.get("/getRandomBooks", BookController.getRandomBooks  )

module.exports = router;