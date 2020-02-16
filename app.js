var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var mainCtrl = require('./src/controller/main');

var app = express();

app.use(cors());
app.use(express.json());

var moongoDB = `mongodb://127.0.0.1:27017/autocomplite`;
mongoose.connect(moongoDB,{useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error',console.error.bind(console, 'MongoDB connection error:'))

app.listen(3000,(req,res)=>{
    mainCtrl(app);
    console.log("Start Aplication AutoComplite");
})