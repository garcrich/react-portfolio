const data = require('../models/projects');

module.exports = app => {
    app.get('/projects-two-col-data', function (req, res) {
        res.send(data);
    });
}