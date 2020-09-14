const express = require('express');
const app  = express();
const path = require('path');
const  parser = require('body-parser');
const urlencodeParse = parser.urlencoded({extended: true});
const jsonParser = parser.json({extended: true});
const router = express.Router();

router.get('/result',(req,res)=>{
    res.status(200).render('static.hbs');
});
router.get('/response',(req,res)=>{
    res.status(200).render('responseComander.hbs');
});
module.exports = router;
