var express = require('express');
var router = express.Router();
var playersCtrl = require('../controllers/players');

/* GET users listing. */
router.get('/', playersCtrl.index);
router.get('/new', playersCtrl.new);

module.exports = router;
