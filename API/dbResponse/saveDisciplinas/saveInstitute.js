const institute = require('../model/instituteModel');

module.exports = async function (name) {
    let rez = await institute.create({
        name:name
    });
    return rez;
};