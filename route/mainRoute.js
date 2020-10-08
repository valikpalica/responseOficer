const express = require('express');
const router = express.Router();
const saveUsers = require('../API/dbUsers/saveUsers');
const saveResponseComander = require('../API/dbResponse/save/saveResponseComander');
const saveResponseOficer = require('../API/dbResponse/save/saveResponseOficeer');
const savesignature = require('../API/dbResponse/adminPanel/savesignature');
const passport = require('passport');
const find = require('../API/dbUsers/find');
const selectAllDisciplina = require('../API/dbResponse/methodDB/selectAlldisciplinas');
const midleball = require('../API/midlepoints/midleballs');
const selectAllOpds = require('../API/dbResponse/methodDB/selectallOPDS');
const midleopds = require('../API/midlepoints/midleopds');
const createDoc = require('../API/save/downloaddoc');
const createDisc = require('../API/save/downloadDisciplinas');
const path = require('path');
const fs = require('fs');


router.get('/autorization', (req, res) => {
    res.status(200).render('autorization.hbs')
});
router.post('/autorization', passport.authenticate('local', {
        failureRedirect: '/autorization',
        failureFlash: true
    }),
    async (req, res) => {
        let {username, vch, password} = req.body;
        let user = await find(username, vch, password);
        if (user.status === 1) {
            res.redirect('/saveResponseComander');
        } else {
            res.redirect('/saveResponseOficer');
        }
    }
);

router.get('/registration', async (req, res) => {
    res.render('registration.hbs');
});
router.post('/registration', async (req, res) => {
    let {name, posada, vch, password, password1, comander} = req.body;
    let user = await find(name, vch, password);
    if (user) {
        console.log('user was created');
        res.redirect('/autorization');
    } else {
        if (password === password1) {
            let rez;
            if (comander != undefined) {
                rez = await saveUsers(name, posada, vch, password, 1);
            } else {
                rez = await saveUsers(name, posada, vch, password, 0);
            }
            if (rez != null) {
                res.redirect(`/autorization`);
            } else {
                console.log('err');
            }
        } else {
            res.render('registration.hbs', {error: true, message: 'Пароли не совподают'});
        }
    }
});

router.get('/saveResponseComander', checkAuthenticated, (req, res) => {
    let Data = new Date();
    res.status(200).render('responseComander.hbs',{data:Data.toLocaleTimeString()})
});
router.post('/saveResponseComander', (req, res) => {
    let {first, second, last} = req.body;
    let ancetaparam = {
        FLP: first.FLP,
        year: first.year,
        work: first.work,
        posada: first.posada,
        vidpovidnist: first.vidpovidnist,
        zvanije: first.zvanije,
        facultet: first.facultet,
        specialize: first.specialize
    };
    saveResponseComander(first.institute, ancetaparam, second.mas, last, second.midle);
    res.status(200).json({answer: 'ok'});
});
router.get('/saveResponseOficer', checkAuthenticated, (req, res) => {
    let Data = new Date();
    res.status(200).render('responseOficer.hbs',{data:Data.toLocaleTimeString()})
});
router.post('/saveResponseOficer', (req, res) => {
    let {first, third, fourth, last} = req.body;
    saveResponseOficer(first.institute, first, third.mas, fourth, last, third.midle);
    res.status(200).json({answer: 'ok'});
});
router.get('/find', checkAuthenticated, async (req, res) => {
    res.status(200).render('findperson.hbs');
});
router.post('/find', async (req, res) => {
    let {year, specialize} = req.body;
    let mas = await selectAllDisciplina(year, specialize);
    let midles = await midleball(mas);
    res.json({answer: midles});
});


router.get('/adminPanel', async (req, res) => {
    let rezult = await savesignature();
    if (rezult) {
        res.status(201).json('Created');
    } else {
        res.status(400).json('error');
    }
});
router.get('/findopds', checkAuthenticated, (req, res) => {
    res.status(200).render('findopds.hbs');
});
router.post('/findopds', async (req, res) => {
    let {year, specialize} = req.body;
    let rez = await selectAllOpds(year, specialize);
    let masprocents = await midleopds(rez);
    res.json({answer: masprocents});
});
router.post('/downloadopds',async (req,res)=>{
    let {year,specialize} = req.body;
    let rez = await selectAllOpds(year, specialize);
    let masprocents = await midleopds(rez);
    let filePath = await createDoc(year,specialize,masprocents);
    let status = fs.existsSync(filePath);
    console.log(status);
    if(status){
        res.status(201).json({answer:status});
    }
    else {
        res.status(400).json({answer:status});
    }
});

router.get('/downloadopds',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/word/wordopds.docx'));
});


router.post('/downloaddisciplinas',async (req,res)=>{
    let {year,specialize} = req.body;
    let mas = await selectAllDisciplina(year, specialize);
    let midles = await midleball(mas);
    console.log(midles);
    let filePath = await createDisc(year,specialize,midles);
    let status = fs.existsSync(filePath);
    console.log(status);
    if(status){
        res.status(201).json({answer:status});
    }
    else {
        res.status(400).json({answer:status});
    }
});

router.get('/downloaddisciplinas',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/word/worddisciplinas.docx'));
});

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/autorization')
}


module.exports = router;