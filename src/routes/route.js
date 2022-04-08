const express = require('express');
const logger = require('./logger')

const router = express.Router();
//=========================================================
//Problem 1  [1,2,3,4,5,7,8,9]
const arrayNum =[1,2,3,4,5,7,8,9]
router.get('/missingNum', function (req, res) {
    let n = arrayNum.length+1 ,sum =0 ,missingNum
    const sumNnum = n*(n+1)/2
    for(let i=0;i<arrayNum.length;i++){
        sum = sum + arrayNum[i]
    }
    missingNum =  sumNnum -sum
    res.send([missingNum]) 
});
//========================================================
//Problem 2 [33,34,35,37,38,39]
router.get('/ap', function (req, res) {
    let arrayNum1=[33,34,35,36,38,39,40,41,42,43]
    let n = arrayNum1.length+1 ,sum1 =0
    let a =arrayNum1[0] , l=arrayNum1[arrayNum1.length-1]
    for(let i=0;i<arrayNum1.length;i++){
        sum1 = sum1 + arrayNum1[i]
    }
    let missingNum1 =  n/2*(a+l) -sum1
    return res.send([missingNum1]) 
});

router.post('/ap', function (req, res) {
    let arrayNum1=[33,34,35,36,38,39,40,41,42,43]
    
});





module.exports = router;
// adding this comment for no reason