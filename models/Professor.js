module.exports = (sequelize, DataTypes) => {
    const Professor = sequelize.define('Professor',{
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
        }
 
    },{
        tableName: 'professores',
        timestamps: false
    })    

    Professor.associate = (listaDeModelos)=>{
        Professor.hasMany(listaDeModelos.Turma, {
            foreignKey: 'professor_id',
            as: 'Professor_Turmas'
        })
    }
    return Professor;
}
