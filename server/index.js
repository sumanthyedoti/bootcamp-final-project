var mongoose = require('mongoose');
var express=require('express');
var bodyParser = require('body-parser');
var cors=require('cors')
var route=require('./Route');
var app=express();
mongoose.set('debug', true);
mongoose.connect('mongodb://workull:workullmountblue1@ds127655.mlab.com:27655/workull', {
    useNewUrlParser: true
}, () => {
    app.listen(4000);
    console.log('connected!');
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/",route.userDetail)


