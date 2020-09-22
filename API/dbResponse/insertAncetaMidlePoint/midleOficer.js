const Anceta = require('../model/AncetaModel');

module.exports = async function (id, midle) {
    let rez = await Anceta.update({midleOficer: midle}, {where: {id: id}});
    console.log(rez);
}