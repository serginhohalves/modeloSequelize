module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define('Aluno',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING
        },
        sobrenome:{
            type: DataTypes.STRING
        },
        ano_matricula:{
            type: DataTypes.INTEGER
        }
        
    },{
        tableName: 'alunos',
        timestamps: false
    })    
    return Aluno;
}