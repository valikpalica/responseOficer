const sequelize = require('../../coonectDB/dbConnect');
const Institute = require('../model/instituteModel');
const Anceta = require('../model/AncetaModel');
const ResponseComander = require('../model/responseComander');
const Disciplina = require('../model/disciplina');
const saveAnceta = require('./saveAnceta');



module.exports = async function (institute,ancetaObj,responseComandermas,lastObj) {

   let id = await  saveAnceta(institute,ancetaObj);
   for(let i=0;i<=responseComandermas.length;i++){
       let disID = ++i;
       let res1 = await ResponseComander.create({
           NSPComander:lastObj.comanderResponse,
           solution:lastObj.comandervhResponse,
           ballcom:responseComandermas[i],
           disciplinaId:disID,
           ancetaId:id
       });
       console.log(res1);
   }
};