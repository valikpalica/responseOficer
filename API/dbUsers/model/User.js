const Sequelize  = require('sequelize');
const sequelize = require('../../coonectDB/dbConnect');

const User = sequelize.define('users',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    posada:{
        type: Sequelize.STRING,
        allowNull: false
    },
    vch:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    status:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});


module.exports = User;