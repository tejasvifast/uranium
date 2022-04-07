const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})
router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});
//====================================================================================================
//Problem 1
const arrayMovie =["Dangal","rang de basanti","demon slayer","dr stone","full-metal alchemist"]
router.get('/movies', function (req, res) {
    res.send(arrayMovie)  
});
//=====================================================================================================
//Problem 2 and 3
router.get('/movies/:indexNumber', function (req, res) {
    const arrayMovie1=["rang de basnasti", "the shining", "lord of the rings", "bartman begins"]
    const index =req.params.indexNumber
    if(index<=arrayMovie1.length-1)
    {res.send(arrayMovie1[index]) }
    else
    {res.send("Please enter valid index value")} 
});
//========================================================================================================
//Problem 4
const arrayObjMovie =[ {
    "id": 1,
    "name": "rang de basnasti"
   }, {
    "id": 2,
    "name": "shining"
   }, {
    "id": 3,
    "name": "lord of the rings"
   }, {
    "id": 4,
    "name": "bartman begins"
   }]
  
  router.get('/films', function (req, res) {
    res.send(arrayObjMovie)  
});
//===================================================================
//Problem 5
router.get('/films/:filmId', function(req, res) {
    const filmIndex = req.params.filmId
    for(let i=0;i<arrayObjMovie.length;i++)
    {
            if(arrayObjMovie[i].id==filmIndex)
            {
                result = arrayObjMovie[i]
                break;
            }
            else
            {
            result = "No movie exists with this id"
            }        
    } 
    res.send(result)
})

module.exports = router;
// adding this comment for no reason