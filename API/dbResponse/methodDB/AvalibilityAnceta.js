const sequelize = require('../../coonectDB/dbConnect');
const Anceta = require('../model/AncetaModel');

module.exports = async function (name,vch){
    let res = await Anceta.findAll({raw:true,where:{NSP:name,vch:vch}});
    if (res.length==0){
        return false;
    }
    return true;
};