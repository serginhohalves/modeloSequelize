const {Aluno, Professor, Turma} = require('./models');




// Professor.findByPk(1).then(professor => {
//     console.log(professor.toJSON())
// }
// )
// include é um objeto que vai trazer os dados de outra tabela

Professor.findByPk(15,{include:["Professor_Turmas"]}).then(professor => {
    console.log(professor.toJSON())
})