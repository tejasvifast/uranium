const express = require('express');
const router = express.Router();
// const CowinController= require("../controllers/cowinController")
const CowinController=require("../controllers/cowinController1")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getByDistrictId",CowinController.getByDistrictId)    //Assignment 1
router.get("/weather/getLondonTemp",CowinController.getLondonTemp)      //Assignment 2
router.get("/weather/getWeatherOfCities",CowinController.getWeatherOfCities)    //Assignment 3
router.post("/memes/makingCustomMeme",CowinController.makingCustomMeme)

// router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;