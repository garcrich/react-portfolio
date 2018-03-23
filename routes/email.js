const keys = require('../config/keys');
const mongoose = require('mongoose');
mongoose.connect(process.env.mongoURI || keys.mongoURI);
require('../models/email');
const Email = mongoose.model('emails');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.sendGridKey || keys.sendGrid);


module.exports = app => {
    app.post('/send-email', function (req, res) {
        new Email({
            from: req.body.emailAddress,
            subjectLine: req.body.subjectLine,
            body: req.body.emailBody,
            date: Date()})
        .save(function (err, doc) {
            if (err)
                res.json('<p>Whoops! I\'m sorry, an error happened while sending your message. Please send a message directly to <a href="mailto:rg3646@outlook.com">rg3646@outlook.com</a>');
            else 
                res.send('<p>Thanks for reaching out! I\'ll be in touch with you soon!</p>');
            });

            let msg = {
              to: process.env.emailAddress || keys.emailAddress,
              from: req.body.emailAddress,
              subject: req.body.subjectLine,
              text: req.body.emailBody,
              html: `<p>${req.body.emailBody}</p>`,
            };


            sgMail.send(msg);
    });
}