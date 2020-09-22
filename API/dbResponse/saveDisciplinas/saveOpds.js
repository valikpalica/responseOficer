const sequelize = require('../../coonectDB/dbConnect');
const OPDS = require('../model/OPDModel');

module.exports = async function (name) {
    let res = await OPDS.create({
        nameOPD: name,
    })
    return res
};