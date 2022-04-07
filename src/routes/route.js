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
const arrayMovie =["Dangal","rang de basanti","demon slayer","dr stone","full-metal alchemist"]
router.get('/movies', function (req, res) {
    // for(let i=0 ;i<arrayMovie.length;i++){
                
    // }
    res.send(arrayMovie[4])
    
});





module.exports = router;
// adding this comment for no reason