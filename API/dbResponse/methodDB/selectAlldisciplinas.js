const Disciplina = require('../model/disciplina');
const ResponseOficer = require('../model/responseOficer');
const ResponseComander = require('../model/responseComander');
const Anceta = require('../model/AncetaModel');


module.exports = async function (year, specialize) {
    try{
        let mas = [];

        let disciplinaMas = await Disciplina.findAll();
        for (let i = 0; i < disciplinaMas.length; i++) {
            let disciplinaId = disciplinaMas[i].dataValues.id;
            let ballOfciers = [];
            let ballcomanders = [];
            let rez = await Anceta.findAll({
                where: {
                    year: year,
                    specialize: specialize
                },
                include: [{
                    model: ResponseOficer,
                    where: {
                        disiciplinaId: disciplinaMas[i].dataValues.id
                    },
                }, {
                    model: ResponseComander,
                    where: {
                        disciplinaId: disciplinaMas[i].dataValues.id,
                    }
                }]
            });
            for (let j = 0; j < rez.length; j++) {
                for (let k = 0; k < rez[j].dataValues.ResponseOficers.length; k++) {
                    ballOfciers.push(rez[j].dataValues.ResponseOficers[k].dataValues.ballofc);
                    ballcomanders.push(rez[j].dataValues.ResponseComanders[k].dataValues.ballcom);
                }
                ;
            }


            mas.push({id: disciplinaId, ballOfciers: ballOfciers, ballComanders: ballcomanders});
        }
        return mas
    }
    catch (e) {
        return null;
    }
};

