var express = require('express');
var router = express.Router();
var positionsCtrl = require('../controllers/positions');

router.post('/players/:id/positions', positionsCtrl.createPosition);

module.exports = router;