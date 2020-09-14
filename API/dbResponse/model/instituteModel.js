const Sequelize  = require('sequelize');
const sequelize = require('../../coonectDB/dbConnect');
const Anketa = require('./AncetaModel');
const baseStake = require('./baseStackModel');
const Institute = sequelize.define('Institute',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
});
Institute.hasMany(Anketa,{onDelete:'cascade',foreignKey:'instituteId'});
module.exports = Institute;