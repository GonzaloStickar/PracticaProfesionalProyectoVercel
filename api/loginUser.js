const path = require('path');

const loginUser = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'components', 'login.htm'));
};

module.exports = {
    loginUser
};