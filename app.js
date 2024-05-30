const express = require("express");
const app = express();
const { main } = require('./api/main');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // Necesario para recibir datos de formularios (Middleware)
app.listen()

//app.get("/inicio", (req, res) => {
//    res.send("Esta es la página de inicio");
//});

app.get("/inicio", main)

app.get("/", (req, res) => { 
    //res.redirect('/inicio');
    res.send({"hola":"hola"})
});



app.get("*", (req, res) => {
    res.status(404).send("Página no encontrada");
});



// export the app for vercel serverless functions
module.exports = app;