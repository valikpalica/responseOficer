const Sequelize  = require('sequelize');
const sequelize = require('../../coonectDB/dbConnect');
const ResponseComander = require('./responseComander');
const ResponseOficer = require('./responseOficer');
const Disciplina = sequelize.define('Disciplina',{
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

Disciplina.hasMany(ResponseComander,{onDelete:'cascade',foreignKey:'disciplinaId'});

module.exports = Disciplina;