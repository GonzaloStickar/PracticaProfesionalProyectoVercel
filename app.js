const express = require("express"); 
const app = express();
const { mainPage } = require("./api/main")

app.get("/", (req, res) => { 
    res.redirect('/inicio');
});

app.get('/inicio', mainPage);

// export the app for vercel serverless functions 
module.exports = app;