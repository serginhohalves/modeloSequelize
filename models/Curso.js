module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING
        }
 
    },{
        tableName: 'cursos',
        timestamps: false
    })    

    Curso.associate = (listaDeModelos)=>{
        Curso.hasMany(listaDeModelos.Turma, {
            foreignKey: 'curso_id',
            as: 'Curso_Turmas'
        }),
        
        Curso.belongsTo(listaDeModelos.Area, {
            foreignKey: 'area_id',
            as: 'Curso_Area'
        })
    }

    return Curso;
    
}