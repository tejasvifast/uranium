const express = require('express');
const logger = require('./logger')

const router = express.Router();
//=========================================================
//Problem 1   Write a get api that returns a list of candidate names
const array =["anuj","bijli","chetan","don","eel","flowery","govind","harry","itty","joy","kime"]
router.get('/all-candidates', function (req, res) {
    return res.send(array) 
});
//========================================================
//Problem 2  Write a get api that returns a list of candidates with size equal to the count value recieved in the query param.
//COnsider that the count value is greater than 0 and less or equal to 10.
// The request you will send should have a url like this - http://localhost:3000/candidates?count=3
router.get('/candidates', function (req, res) {
    let array1=[]
    // console.log(req)
    // console.log('These are the request query parameters: ', req.query.count)
    if (req.query.count <=10)
    {
        for(let i=0;i<req.query.count;i++)
        {
            array1[i]=array[i]
        }
    }
    return res.send(array1) 
});





module.exports = router;
// adding this comment for no reason