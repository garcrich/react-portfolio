const data = require('../models/skills');

module.exports = app => {
    app.get('/skills-data', function (req, res) {
        res.send(data);
    });
}