var express = require('express');
var router = express.Router();
const ProfessorController = require('../controllers/ProfessorController');


router.get('/',ProfessorController.curso)
router.get('/:id',ProfessorController.id) // Rota para trazer as informacoes do professor relacionadas ao: 



module.exports = router; 
