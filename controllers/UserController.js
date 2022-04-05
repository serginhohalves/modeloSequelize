
const {Aluno} = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op // Operador de comparação

const UserController = {
    index: async(req, res) =>{
        let alunos = await Aluno.findAll()
        return res.render('users',{alunos})
    },
    show: async(req, res) =>{
       
       let{id} = req.params
       let aluno = await Aluno.findOne({    
           where: {
                id: id
           }

       })
       res.render('viewAluno',{aluno})
    },
    search: async(req, res) =>{
        let {key} = req.query
        let alunos = await Aluno.findAll({
            where: {
                nome: {
                    [Op.like]: `%${key}%` // Op.like = like é o operador de comparação
                }
            }
        })
        res.render('users',{alunos})
    }
}
 

module.exports = UserController;