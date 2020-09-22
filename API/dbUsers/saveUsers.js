const sequelize = require('../coonectDB/dbConnect');
const User = require('./model/User');
const bcrypt = require('bcrypt');

module.exports = async function (name,posada,vch,password,comander) {

    try{
        let salt  = await bcrypt.genSaltSync(10);
        let hash = await bcrypt.hashSync(password,salt);
        let rezult = await User.create({
            name:name,
            posada:posada,
            vch:vch,
            password:hash,
            status:comander,
        });
        return rezult;
    }
    catch (e) {
        console.log(e);
    }


};