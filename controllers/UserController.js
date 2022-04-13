
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
            },
            order:[ 
                ['nome', 'DESC'] 

            ]
        })
        res.render('users',{alunos})
    },
    create: async(req, res) =>{
        res.render('cadastroAluno')
    },
    store:async(req,res)=>{
        const {nome, sobrenome, ano_matricula} = req.body;
        const result = await Aluno.create({
            nome,
            sobrenome,
            ano_matricula
        })
        console.log(result)
       return res.redirect('/users')
    },
    // bulkCreate: async(req,res)=>{
    //     const listaDeUsuarios = [
    //         {nome:"Jhon", sobrenome:"Silva", ano_matricula:2020},
    //         {nome:"Mary", sobrenome:"Silva", ano_matricula:2021},
    //         {nome:"Pietro", sobrenome:"Silva", ano_matricula:2022},
    //         {nome:"Joseph", sobrenome:"Silva", ano_matricula:2019},
    //     ];
    //     const result = await Aluno.bulkCreate(listaDeUsuarios)
    //     console.log(result)
    //     res.send('Bulk created')
            
    // },
    edit: async(req, res) =>{
        const{id} = req.params;
        let aluno = await Aluno.findOne({
            where: {
                id: id
            }
        })
        res.render('editarAluno',{aluno})
        // let aluno = await Aluno.findByPk(id);
        // return res.render('editarAluno', {aluno})
    },
    update: async(req, res) =>{
        const {id} = req.params;
        const {nome, sobrenome, ano_matricula} = req.body;
        const result = await Aluno.update({
            nome,
            sobrenome,
            ano_matricula
        },{
            where: {
                id: id
            }
        })
        console.log(result)
        return res.redirect('/users')
    },

    destroy: async(req, res) =>{
        const {id} = req.params;
        const result = await Aluno.destroy({
            where: {
                id: id
            }
        })
        console.log(result)
        return res.redirect('/users')
    }
        

 



    // update: async(req, res) =>{
    //     const{id} = req.params;
    //     const{nome, sobrenome, ano_matricula} = req.body
    //     const result = await Aluno.update({
    //         nome,
    //         sobrenome,
    //         ano_matricula
    //     },{
    //         where: {
    //             id: id
    //     }
    // })
    //     console.log(result)
    //     return res.redirect('/users')
    // }
}
module.exports = UserController;