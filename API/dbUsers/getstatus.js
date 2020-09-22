const User = require('./model/User');


module.exports = async function (surname,name,vch,posada){
    let rez = await User.findOne({where:{name:name,surname:surname,vch:vch,posada:posada}});
    return rez.status;
};