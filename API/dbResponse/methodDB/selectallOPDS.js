const Anceta = require('../model/AncetaModel');
const BaseStoke = require('../model/baseStackModel');
const OPDS = require('../model/OPDModel');

module.exports = async function (year, specialize) {
   try {
       let mas =[];
       let opds = await OPDS.findAll();
       for (let i = 0; i < opds.length; i++) {
           let opdsId= opds[i].dataValues.id;
            let masCoris = [];
            let masNedolik = [];
           let masData = await Anceta.findAll({
               where: {
                   year: year,
                   specialize: specialize
               },
               include: [{
                   model: BaseStoke,
                   where: {
                       opdId: opds[i].dataValues.id
                   }
               }]
           });
           for (let k=0;k<masData.length;k++){
               for(let j=0;j<masData[k].dataValues.BaseStokes.length;j++){
                   //console.log(masData[k].dataValues.BaseStokes[j].dataValues);
                   masCoris.push(masData[k].dataValues.BaseStokes[j].dataValues.corist);
                   masNedolik.push(masData[k].dataValues.BaseStokes[j].dataValues.nedolik);
               }
           }

           mas.push({id:opdsId,masCoris:masCoris,masNedolik:masNedolik});
       }
       return mas
   }
   catch (e) {
       return null;
   }
};