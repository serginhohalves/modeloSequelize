var express = require('express');
var router = express.Router();

const CursoController   = require('../controllers/CursoController');


router.get('/', CursoController.curso);



module.exports = router; 
