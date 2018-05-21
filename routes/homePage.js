const data = require('../models/homePage');

module.exports = app => {
    app.get('/index-two-col-data', function (req, res) {
        res.send(data);
    });
}