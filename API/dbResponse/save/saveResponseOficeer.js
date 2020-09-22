const ResponseOficer = require('../model/responseOficer');
const baseStoke = require('../model/baseStackModel');
const saveAnceta = require('./saveAnceta');
const Avalibility = require('../methodDB/AvalibilityAnceta');
const midleOficer = require('../insertAncetaMidlePoint/midleOficer');



module.exports = async function (institute,ancetaObj,responseOficer,responseNedolik,lastObj,midle) {
   try{
       let id ;
       let rezAvalibility = await Avalibility(ancetaObj.FLP,ancetaObj.work);
       if(rezAvalibility){
           id= rezAvalibility
           await midleOficer(id,midle);
       }
       else {
           id = await  saveAnceta(institute,ancetaObj,midle,null);
       }
       let disID=0;
       for (let i=0;i<responseOficer.length;i++){
           disID++;
           let resResOfc = await ResponseOficer.create({
               solution:lastObj.oficerResponse,
               ballofc : responseOficer[i],
               disiciplinaId:disID,
               ancetaId:id
           });
       }
       let opdID = 0;
       for (let i = 0 ;i<responseNedolik.length;i++){
           opdID++;
           let res = await baseStoke.create({
               corist: responseNedolik[i].koris,
               nedolik:responseNedolik[i].nedolik,
               opdId:opdID,
               ancetaId:id,
           });
       }
   }
   catch (e) {
       console.log(e);
   }
};