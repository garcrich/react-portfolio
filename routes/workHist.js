const data = require('../models/workPage');

module.exports = app => {
    app.get('/work-hist-two-col-data', function (req, res) {
        res.send(data);
    });
}