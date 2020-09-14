const Sequelize  = require('sequelize');
const sequelize = require('../../coonectDB/dbConnect');
const ResponseOficer = require('./responseOficer');
const ResponseComander = require('./responseComander');
const BaseStoke = require('./baseStackModel');

const Anceta = sequelize.define('Anceta',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    NSP:{
        type: Sequelize.STRING,
        allowNull: false
    },
    rank:{
        type:Sequelize.STRING,
        allowNull:false
    },
    facultet:{
        type:Sequelize.STRING,
        allowNull:false
    },
    specialize:{
        type:Sequelize.STRING,
        allowNull:false
    },
    vch:{
        type:Sequelize.STRING,
        allowNull:false
    },
    posada:{
        type:Sequelize.STRING,
        allowNull:false
    },
    viddpovidnist:{
        type:Sequelize.STRING,
        allowNull:false
    },
    year:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

Anceta.hasMany(ResponseOficer,{onDelete:'cascade', foreignKey:'ancetaId'});
Anceta.hasMany(ResponseComander,{onDelete:'cascade',foreignKey:'ancetaId'});
Anceta.hasMany(BaseStoke,{onDelete:'cascade',foreignKey:'ancetaId'});


module.exports = Anceta;