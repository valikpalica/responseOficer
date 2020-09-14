const sequelize = require('../coonectDB/dbConnect');
const User = require('./model/User');


module.exports = async function (name, surname, vch, password) {
    let rez = await User.findOne({
        where: {
            name: name,
            surname: surname,
            vch: vch,
            password: password
        }
    });
    return rez;
};