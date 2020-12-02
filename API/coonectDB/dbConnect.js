const Sequelize  = require('sequelize');
let sequelize =  new Sequelize('Response','root','1111',{
    dialect:'mysql',
    port:'3306',
    host:'localhost',
    define: {
        timestamps: false
    }
});
module.exports = sequelize;


