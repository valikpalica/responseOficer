const express = require('express');
const path = require('path');
const router = express.Router();
const  parser = require('body-parser');
const urlencodeParse = parser.urlencoded({extended: true});
const jsonParser = parser.json({extended: true});
const saveUsers  = require('../API/dbUsers/saveUsers');
const find = require('../API/dbUsers/find');
const saveResponseComander = require('../API/dbResponse/save/saveResponseComander');
const saveResponseOficer = require('../API/dbResponse/save/saveResponseOficeer');
const AvalibilityAnceta = require('../API/dbResponse/methodDB/AvalibilityAnceta');


router.get('/autorization',(req, res)=>{
    res.status(200).render('autorization.hbs')
});
router.post('/autorization',urlencodeParse,async (req, res)=>{
    let {name,surname,vch,password} = req.body;
    let data = new Date();
    let rez = await find(name,surname,vch,password);

    if(rez!=null){
        res.render('responseComander.hbs',{surname:surname,data:data.toLocaleTimeString()});
    }
    else{
        console.log('user not found');
        res.json({answer:'No user'})
    }
});
router.get('/registration',async (req, res)=>{
   res.render('registration.hbs');
});
router.post('/registration',urlencodeParse,async (req, res)=>{
    let {name,surname,patronim,posada,vch,password} = req.body;
    let rez = await saveUsers(name,surname,patronim,posada,vch,password);
    if(rez!=null){
        res.redirect(`/autorization`);
    }
    else {
        console.log('err');
    }
});
router.get('/result',(req,res)=>{
    res.status(200).render('static.hbs');

});
router.post('/result',urlencodeParse,(req,res)=>{
    console.log(req.body);
    res.status(200).render('static.hbs');
});
router.get('/response/:surname',(req,res)=>{
    let data = new Date();
    let surname = req.params['surname'];
    res.status(200).render('responseComander.hbs',{
        surname :surname,
        data:data.getFullYear(),
    });
});
router.post('/saveResponseComander',jsonParser,(req,res)=>{
    let {first,second,last} = req.body;
    console.log(first,second,last);
    let ancetaparam = {
      FLP:first.FLP,
      year:first.year,
      work:first.work,
      posada:first.posada,
        vidpovidnist:first.vidpovidnist,
        zvanije:first.zvanije,
        facultet:first.facultet,
        specialize:first.specialize
    };
    saveResponseComander(first.institute,ancetaparam,second,last);
    res.status(200).json({answer:'ok'});
});
router.get('/responseOficer',(req,res)=>{
    res.status(200).render('responseOficer.hbs')
});
router.post('/saveResponseOficer',jsonParser,(req,res)=>{
    let {first,third,fourth,last}  =  req.body;
    //console.log(first,third,fourth,last);
    saveResponseOficer(first.institute,first,third,fourth,last);
    res.status(200).json({answer:'ok'});
});
router.get('/find',async (req,res)=>{
    let rezult =await AvalibilityAnceta('Палиця Валентин Олександрович','А0334');
    console.log(rezult);
    res.status(200).render('findperson.hbs');
});
module.exports = router;