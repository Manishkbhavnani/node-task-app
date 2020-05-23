// Module Import
var express = require('express');
var router = express.Router();
const taskController = require('../controllers/task-controller');
const trimRequest = require('trim-request')

router.post('/add' , trimRequest.all ,   taskController.taskAdd);
router.post('/list' , trimRequest.all  ,  taskController.listTask);
router.post('/update' , trimRequest.all ,   taskController.taskEdit);
router.post('/delete' , trimRequest.all ,   taskController.taskDelete);

module.exports = router;