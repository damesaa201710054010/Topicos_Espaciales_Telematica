const express = require('express');
const router = express.Router();
const {ensureToken} = require('../middlewares/authenticated');
const {post, get} = require('../controllers/data.controller');

router.route('/saveData')
      .post(ensureToken, post);

router.route('/getData') 
      .get(ensureToken, get);

module.exports = router;