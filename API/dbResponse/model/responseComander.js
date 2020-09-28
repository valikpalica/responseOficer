const Sequelize  = require('sequelize');
const sequelize = require('../../coonectDB/dbConnect');



const ResponseComander = sequelize.define('ResponseComander',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    NSPComander:{
        type:Sequelize.STRING,
        allowNull:false
    },
    solution:{
        type: Sequelize.STRING,
        allowNull: false
    },
    ballcom:{
        type:Sequelize.FLOAT,
        allowNull:false
    },

});

module.exports = ResponseComander;