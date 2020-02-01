const express = require('express');
const router = express.Router();

const device = require('../models/device');


router.get('/', (req, res) =>{
    res.send('hello');
});




module.exports = router;