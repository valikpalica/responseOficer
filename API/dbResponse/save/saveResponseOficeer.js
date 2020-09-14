const ResponseOficer = require('../model/responseOficer');
const baseStoke = require('../model/baseStackModel');
const saveAnceta = require('./saveAnceta');



module.exports = async function (institute,ancetaObj,responseOficer,responseNedolik,lastObj) {
    console.log(institute,ancetaObj,responseOficer,responseNedolik,lastObj);
    let id = await  saveAnceta(institute,ancetaObj);
    for (let i=0;i<responseOficer.length;i++){
        let resResOfc = await ResponseOficer.create({
            solution:lastObj.oficerResponse,
            ballofc : responseOficer[i],
            disiciplinaId:++i,
            ancetaId:+id
        });
    }
    for (let i = 0 ;i<responseNedolik.length;i++){
        let res = await baseStoke.create({
            corist: responseNedolik[i].koris,
            nedolik:responseNedolik[i].nedolik,
            opdId:++i,
            ancetaId:+id,
        });
    }
};