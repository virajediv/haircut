const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.use('/css',express.static('css'));
app.use('/font',express.static('font'));
app.use('/images',express.static('images'));
app.use('/js',express.static('js'));

// Connect server to Angular 2 Index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/contact.html'));
});

app.get('/appointment', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/appointment.html'));
});

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/gallery.html'));
});

//server start
app.listen(3000,() => {
    console.log('Start server');
});