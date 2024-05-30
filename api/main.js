const fs = require('fs');

const main = (req, res) => {
    // Ruta al archivo index.html (directamente)
    const indexPath = './public/templates/index.html';

    fs.readFileSync(indexPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            res.status(200).send(data);
        }
    });
};

module.exports = {
    main
};
