const {Curso, Turma} = require('../models');

const CursoController = {
    curso: async (req,res)=>{
        const Cursos = await Curso.findAll({
            include:{
                model: Turma,
                as: 'Curso_Turmas',
                required: false, 
                
                
            }
        });
        
        return res.send(Cursos)
        
    }
}

module.exports = CursoController;