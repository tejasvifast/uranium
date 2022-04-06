const express = require('express');
const res = require('express/lib/response');

const logger = require("../logger/logger")
const helper = require("../util/helper")
const formatter = require("../validator/formatter")
const _ = require("lodash");
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('Calling log function');
    logger.logging()
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo()
    formatter.trim1()
    formatter.changetoLowerCase1()
    formatter.changeToUpperCase1()
    res.send('My first ever api!')

});

const arrayMonth =["jan","feb","mar","april","may","june","july","aug","sep","oct","nov","dec"]
const arrayOddNum = [1,3,5,7,9,11,13,15,17,19]
const a = [1,3,5] ,b=[3,7,1],c=[2,4,5], d=[1,3,9], e=[1,2,6]
const movie = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
router.get('/hello',function(req,res){
    console.log(_.chunk(arrayMonth,4))
    console.log(_.tail(arrayOddNum));
    console.log(_.union(a,b,c,d,e));
    console.log(_.fromPairs(movie))
    res.send('Fourth Problem')
});

module.exports = router;
// adding this comment for no reason