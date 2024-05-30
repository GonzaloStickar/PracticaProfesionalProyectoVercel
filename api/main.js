const { request, response } = require('express');
require('dotenv').config();
const fs = require('fs');

const main = (req = request, res = response) => {
    const paginaPrincipal = fs.readFileSync('./public/templates/index.html', 'utf8');
    res.status(200).send(paginaPrincipal);
}

module.exports = {
    main
};