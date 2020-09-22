const express = require('express');
const router = express.Router();
const saveUsers = require('../API/dbUsers/saveUsers');
const saveResponseComander = require('../API/dbResponse/save/saveResponseComander');
const saveResponseOficer = require('../API/dbResponse/save/saveResponseOficeer');
const savesignature = require('../API/dbResponse/adminPanel/savesignature');
const findOficers = require('../API/dbResponse/methodDB/findOficers');
const passport = require('passport');
const find  = require('../API/dbUsers/find');

router.get('/autorization', (req, res) => {
    res.status(200).render('autorization.hbs')
});
router.post('/autorization', passport.authenticate('local', {
        failureRedirect: '/autorization',
        failureFlash: true
    }),
    async (req,res)=>{
    let {username,vch,password} = req.body;
    let user = await find(username,vch,password);
    if(user.status==1){
        res.redirect('/saveResponseComander');
    }
    else {
        res.redirect('/saveResponseOficer');
    }
    }
);

router.get('/registration', async (req, res) => {
    res.render('registration.hbs');
});
router.post('/registration', async (req, res) => {
    let {name, posada, vch, password,password1, comander} = req.body;
    let user = await find(name,vch,password);
    console.log(user);
    if(user){
        console.log('user was created');
        res.redirect('/autorization');
    }
    else {
        if(password==password1){
            console.log('password valid');
            console.log( posada, vch, password, comander);
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
        }
        else {
            res.render('registration.hbs',{error:true,message:'Пароли не совподают'});
        }
    }
});

router.post('/result', (req, res) => {
    console.log(req.body);
    res.status(200).render('static.hbs');
});
router.get('/saveResponseComander', checkAuthenticated,(req, res) => {
    res.status(200).render('responseComander.hbs')
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
router.get('/saveResponseOficer',checkAuthenticated, (req, res) => {
    res.status(200).render('responseOficer.hbs')
});
router.post('/saveResponseOficer', (req, res) => {
    let {first, third, fourth, last} = req.body;
    saveResponseOficer(first.institute, first, third.mas, fourth, last, third.midle);
    res.status(200).json({answer: 'ok'});
});
router.get('/find',checkAuthenticated, async (req, res) => {
    res.status(200).render('findperson.hbs');
});
router.post('/find', async (req, res) => {
    let {year, specialize} = req.body;
    console.log(year,specialize);
    let rez = await findOficers(year, specialize);
    res.json({answer: rez});
});

router.get('/result', checkAuthenticated,(req, res) => {
    res.status(200).render('static.hbs');
});

router.get('/adminPanel', async (req, res) => {
    let rezult = await savesignature();
    if (rezult) {
        res.status(201).json('Created');
    } else {
        res.status(400).json('error');
    }
});

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/autorization')
}

module.exports = router;