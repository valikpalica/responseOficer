const express = require("express");
const app = express();
const path = require('path');
const autification = require('./route/mainRoute');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const parser = require('body-parser');
const Activedb = require('./API/dbUsers/Activedb');
const host = '192.168.1.103';
app.set("views engine", "hbs");

app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

const initializePassport = require('./API/dbUsers/passport');
initializePassport(passport);
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24*60*60*1000
    }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname,'public')));

app.use('/',autification);

app.listen(8080,async ()=>{
    console.log('server has been started on 192.168.1.104 host port 8080');
    await Activedb();
});
