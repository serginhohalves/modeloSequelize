module.exports = (sequelize, DataTypes) => {
    const Area = sequelize.define('Area',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo: {
            type: DataTypes.STRING
        }
 
    },{
        tableName: 'areas',
        timestamps: false
    })    

    Area.associate = (listaDeModelos)=>{
        Area.hasMany(listaDeModelos.Curso, {
            foreignKey: 'area_id',
            as: 'Area_Cursos'
        })
    }
    return Area;
    
}
