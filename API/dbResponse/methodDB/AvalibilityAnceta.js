const sequelize = require('../../coonectDB/dbConnect');
const Anceta = require('../model/AncetaModel');

module.exports = async function (name,vch){
    let res = await Anceta.findOne({raw:true,where:{NSP:name,vch:vch}});
    if (res==null){
        return false;
    }
    return res.id;
};