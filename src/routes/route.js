const express = require('express');

const logger = require("../logger/logger")
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('Calling log function');
    logger.logging()
    res.send('My first ever api!')

});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});
module.exports = router;
// adding this comment for no reason