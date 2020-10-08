const ResponseComander = require('../model/responseComander');
const saveAnceta = require('./saveAnceta');
const AvalibilityAnceta = require('../methodDB/AvalibilityAnceta');
const midleComander = require('../insertAncetaMidlePoint/midleComander');


module.exports = async function (institute, ancetaObj, responseComandermas, lastObj, midle) {
   try{
       let id;
       let rez = await AvalibilityAnceta(ancetaObj.FLP,ancetaObj.work);
       if(rez){
           id = rez;
           await midleComander(id,midle);
       }
       else {
           id = await saveAnceta(institute, ancetaObj, null, midle);
       }
       let disID = 0;
       for (let i = 0; i < responseComandermas.length; i++) {
           disID++;
           await ResponseComander.create({
               NSPComander: lastObj.comanderResponse,
               solution: lastObj.comandervhResponse,
               ballcom: responseComandermas[i],
               disciplinaId: disID,
               ancetaId: id
           });
       }
   }
   catch (e) {
       console.log(e);
   }
};