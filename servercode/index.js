var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();

const route = require('./route/routes.js')
// mongoose.connect('mongodb://localhost:27017/office-manager');
mongoose.connect('mongodb://localhost:27017/mongo-example');




mongoose.connection.on('connected', () => {
    console.log('you have connected to mongoDB')
});


mongoose.connection.on('error', (err) => {
    console.log('Connection failed', err);
});

const PORT = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use('/api', route);

app.get('/',(req,res) => {
    res.send("Rodger am here bra");
});

app.listen(PORT, ()=> {
    console.log(`Server started at PORT = ${PORT} we are listening`);
})