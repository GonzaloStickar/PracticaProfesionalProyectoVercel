const express = require("express");
const app = express();
const { main } = require('./api/main');

// A simple get greet method 
app.get("/", (req, res) => { 
    //res.redirect('/inicio');
    res.send({"hola":"hola"})
});

//app.get('/inicio', main);

// export the app for vercel serverless functions 
module.exports = app;