const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/candidates', function (req, res) {
    const array =["a","b","c","d","e","f","g","h","i","j","k"]
    let array1=[]
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query.count)
    if (req.query.count <=10)
    {
        for(let i=0;i<=req.query.count-1;i++)
        {
            array1[i]=array[i]
        }
    }
    return res.send(array1) 
    // console.log(array1)
    // return  res.send('My first ever api!')
});





module.exports = router;
// adding this comment for no reason