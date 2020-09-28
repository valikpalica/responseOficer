const Sequelize  = require('sequelize');
const sequelize = require('../../coonectDB/dbConnect');
const Disciplina = require('./disciplina');


const ResponseOficer = sequelize.define('ResponseOficer',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    solution:{
        type: Sequelize.STRING,
        allowNull: false
    },
    ballofc:{
        type:Sequelize.FLOAT,
        allowNull:false
    }

});

ResponseOficer.belongsTo(Disciplina,{onDelete:'cascade',foreignKey:'disiciplinaId'});
module.exports = ResponseOficer;