const path = require('path');

const main = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'components', 'home.htm'));
};

module.exports = {
    main
};