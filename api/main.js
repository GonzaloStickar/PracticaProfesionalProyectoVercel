const path = require('path');

const main = (req, res) => {
    // Ruta al archivo index.html (directamente)
    const indexPath = path.join(process.cwd(), 'public', 'templates', 'index.html');
    console.log("Ruta al archivo index.html:", indexPath);

    // Enviar el archivo HTML como respuesta
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error('Error al enviar el archivo:', err);
            res.status(500).send('Error interno del servidor');
        }
    });
};

module.exports = {
    main
};