const User = require('./model/User');

module.exports = async function (name,surname,posada,vch){
  let rez = await User.findAll({where:{name:name,surname:surname,vch:vch,posada:posada}});
  if(rez.length!=0){
      return true;
  }
  else {
      return false;
  }
};