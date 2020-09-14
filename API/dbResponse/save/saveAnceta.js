const sequelize = require('../../coonectDB/dbConnect');
const Institute = require('../model/instituteModel');
const Anceta = require('../model/AncetaModel');
const ResponseComander = require('../model/responseComander');
const Disciplina = require('../model/disciplina');



module.exports = async function (institute,ancetaObj) {

    let res = await Anceta.create({
        NSP:ancetaObj.FLP,
        rank:ancetaObj.zvanije,
        facultet:ancetaObj.facultet,
        specialize:ancetaObj.specialize,
        vch:ancetaObj.work,
        posada:ancetaObj.posada,
        viddpovidnist:ancetaObj.vidpovidnist,
        instituteId:+institute,
        year:ancetaObj.year,
    });

    return res.id;

};




