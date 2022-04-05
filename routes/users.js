var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/',UserController.index) 
router.get('/ver/:id',UserController.show)
router.get('/search',UserController.search)


module.exports = router; 
