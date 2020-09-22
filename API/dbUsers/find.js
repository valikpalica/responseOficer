const sequelize = require('../coonectDB/dbConnect');
const User = require('./model/User');
const bcrypt = require('bcrypt');


module.exports = async function (name, vch, password){
    let user = await User.findOne({
        where: {
            name: name,
            vch: vch,
        }
    });
    if(user){
        let status = await bcrypt.compareSync(password,user.password);
        if(status){
            return user;
        }
        else{
            return null;
        }
    }
    else {return false}
};