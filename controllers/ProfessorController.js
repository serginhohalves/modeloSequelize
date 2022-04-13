
const config = require('../config/database');
const {Professor,Turma, sequelize, Cursos, Area} = require('../models');

const ProfessorController = {
    curso: async (req,res)=>{

        const Professores = await Professor.findAll({
            include:{
                model: Turma,
                as: 'Professor_Turmas',
                required: false, 
            }
        });
        
        return res.render('professores',{
            professores: Professores
        })
    },
        id: async (req,res)=>{
            const id = req.params.id;

            const professor = await Professor.findAll({
                where:{
                    id: id
                },
                include:[{
                    model: Turma,
                    association: 'Professor_Turmas',
                    required:false,
                    include:[{
                        model: Cursos,
                        association: 'Turma_Curso',
                        required:false,
                        include:[{
                            model: Area,
                            association: 'Curso_Area',
                            required:false
                        }]

                    }]
                }]

              
            });

        return res.send (professor);

        }
        
}
module.exports = ProfessorController;
