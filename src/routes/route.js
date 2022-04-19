const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")
const batchController =require("../controllers/batchController")
const developerController =require("../controllers/developerController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createAuthor", authorController.createAuthor  )   //
// router.post("/createPublisher", publisherController.createPublisher )   //
// router.post("/createBook" , bookController.createBook ) //
// router.get("/getBooksData", bookController.getBooksData )
// router.put("/books",bookController.books)
// router.put("/books1",bookController.books1)
router.post("/batches",batchController.createBatch)
router.post("/developers",developerController.createDeveloper)
router.get("/scholarshipDevelopers",developerController.scholarshipDevelopers)
router.get("/developers",developerController.developersQuery)

module.exports = router;