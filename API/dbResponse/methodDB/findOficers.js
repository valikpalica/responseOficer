const Anceta = require('../model/AncetaModel');


module.exports = async function (year,specialize){
    try{
        let rez = await Anceta.findAll({where:{specialize:specialize,year:year}});
        return  rez;
    }
    catch (e) {
        console.log(e);
    }
}