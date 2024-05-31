const path = require('path');

const main = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'src', 'components', 'index.htm'));
};

module.exports = {
    main
};