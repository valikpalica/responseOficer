const Sequelize = require('sequelize');
const sequelize = require('../../coonectDB/dbConnect');
const OPDModel = require('./OPDModel');

const BaseStoke = sequelize.define('BaseStoke', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    corist:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nedolik:{
        type:Sequelize.STRING,
        allowNull:true
    }
});
BaseStoke.belongsTo(OPDModel,{onDelete:'cascade',foreignKey:'opdId'});
module.exports = BaseStoke;