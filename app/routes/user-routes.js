// Module Import
var express = require('express');
var router = express.Router();
const userController = require('../controllers/user-controller');
const trimRequest = require('trim-request')

router.post('/add' , trimRequest.all ,   userController.userAdd);
router.post('/levelUser' , trimRequest.all ,   userController.levelUser);


module.exports = router;