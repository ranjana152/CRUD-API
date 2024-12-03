const { DataTypes} = require('sequelize');
module.exports.createUserModel=async(sequelize)=>{
    const User=sequelize.define('User',{
        rollId:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        middleName:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        totalMarks:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },    
    });
    return User;
}