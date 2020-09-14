const express = require("express");
const app = express();
const path = require('path');
const autification = require('./route/mainRoute');
const doc= require('./route/doc');
const hbs = require('hbs');
const Activedb = require('./API/dbUsers/Activedb');
const saveDisciplina = require('./API/dbResponse/saveDisciplinas/savedsiciplina');
app.set("views engine", "hbs");

app.use(express.static(path.join(__dirname,'public')));


app.use('/',autification);

app.listen(8080,async ()=>{
    console.log('server has been started');
    await Activedb();

});
