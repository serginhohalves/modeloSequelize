module.exports = (sequelize, DataTypes) => {
    const Turma = sequelize.define('Turma',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        duracao: {
            type: DataTypes.INTEGER
        },
        ano_inicio:{
            type: DataTypes.INTEGER
        },
        semestre:{
            type:DataTypes.INTEGER
        }
 
    },{
        tableName: 'turmas',
        timestamps: false
    })    

    Turma.associate = (listaDeModelos)=>{
        Turma.belongsTo(listaDeModelos.Professor, {
            foreignKey: 'professor_id', 
            as: 'Turma_Professor'// 
        })
        Turma.belongsTo(listaDeModelos.Curso, {
            foreignKey: 'curso_id',
            as: 'Turma_Curso'

        })
        Turma.hasMany(listaDeModelos.Aluno, {
            foreignKey: 'turma_id',
            as: 'Turma_Alunos'
        })

    }


    return Turma
    
}
