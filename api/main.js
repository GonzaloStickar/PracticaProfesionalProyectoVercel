const path = require('path');

const main = (req, res) => {

    // Obligatorio usar 'process.cdw()' si usamos Vercel.
    //const indexPath = path.join(process.cwd(), 'public', 'templates', 'index.html');
    const indexPath = path.join(process.cwd(), 'public', 'index.html');
    console.log(indexPath)

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