const sequelize = require('../coonectDB/dbConnect');
const User = require('./model/User');



module.exports = async function (name,surname,patronim,posada,vch,password) {

   let rezult = await User.create({
           name:name,
           surname:surname,
           patronim:patronim,
           posada:posada,
           vch:vch,
           password:password
       });
    return rezult;
};