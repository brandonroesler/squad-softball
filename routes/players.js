var express = require('express');
var router = express.Router();
var playersCtrl = require('../controllers/players');

/* GET users listing. */
router.get('/', playersCtrl.index);
router.get('/new', playersCtrl.new);
router.get('/:id', playersCtrl.show);
router.post('/', playersCtrl.create)
router.delete('/:id', playersCtrl.delPlayer);

//actual url below is http://localhost:3000/players/create
router.post('/create', playersCtrl.create);// this is the route where the form needs to send its info

module.exports = router;
