const sequelize = require('../coonectDB/dbConnect');
const Institute = require('../dbResponse/model/instituteModel');


module.exports = async function () {

    Institute.findAll({raw:true}).then(inst=>{
        return  'ok';
    }).catch(err=>console.log(err));
};