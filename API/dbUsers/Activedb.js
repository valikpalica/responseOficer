const sequelize = require('../coonectDB/dbConnect');
const Institute = require('../dbResponse/model/instituteModel');


module.exports = async function () {
    sequelize.sync(/*{force:true}*/).then(()=>{
        console.log("Tables have been created");
    }).catch(err=>console.log(err));
};