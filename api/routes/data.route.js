const express = require('express');
const router = express.Router();
const {post, get} = require('../controllers/data');

router.route('/saveData')
      .post(post);

router.route('/getData') 
      .get(get);

module.exports = router;