const Sequelize  = require('sequelize');
const sequelize = require('../../coonectDB/dbConnect');
const BaseStoke  = require('./baseStackModel');

const OPDModel = sequelize.define('OPD',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    nameOPD:{
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = OPDModel;