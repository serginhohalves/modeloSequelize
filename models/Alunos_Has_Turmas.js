module.exports = (sequelize, DataTypes) => {
    const AlunosHasTurmas = sequelize.define('AlunosHasTurmas', {
        aluno_id: DataTypes.INTEGER,
        turma_id: DataTypes.INTEGER,
        numero_faltas: DataTypes.INTEGER
    },{
        tableName: 'alunos_has_turmas',
        timestamps: false
    })
    AlunosHasTurmas.associate = (listaDeModelos) => {
        AlunosHasTurmas.belongsTo(listaDeModelos.Aluno, {
            foreignKey: 'aluno_id',
            as: 'Alunos_Has_Turmas_Aluno'
        })
        AlunosHasTurmas.belongsTo(listaDeModelos.Turma, {
            foreignKey: 'turma_id',
            as: 'Alunos_Has_Turmas_Turma'
        })
    }
    return AlunosHasTurmas
}