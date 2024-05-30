const express = require("express");
const app = express();
const { main } = require('./api/main');

app.use(express.static("public"));

app.listen()

app.get("/", (req, res) => { 
    //res.redirect('/inicio');
    res.send({"hola":"hola"})
});

app.get('/inicio', main);

app.get("*", (req, res) => {
    res.status(404).send("Página no encontrada");
});



// export the app for vercel serverless functions
module.exports = app;