const keys = require('../config/keys');
const mongoose = require('mongoose');
mongoose.connect(process.env.mongoURI || keys.mongoURI);
require('../models/email');
const Email = mongoose.model('emails');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.sendGridKey || keys.sendGrid);


module.exports = app => {
    app.post('/send-email', function (req, res) {
        console.log('axios info', req.body);
        new Email({
            from: req.body.name,
            emailAddress: req.body.email,
            subjectLine: req.body.subject,
            body: req.body.message,
            date: Date()
        })
            .save(function (err, doc) {
                if (err)
                    res.json('<p>Whoops! I\'m sorry, an error happened while sending your message. Please send a message directly to <a href="mailto:rg3646@outlook.com">rg3646@outlook.com</a>');
                else
                    res.send('<p>Thanks for reaching out! I\'ll be in touch with you soon!</p>');
            });

        const msg = {
            to: keys.emailAddress || process.env.emailAddress,
            from: req.body.email,
            //emailAddress: req.body.email,
            subject: req.body.subject,
            text: req.body.message,
            html: `<p>${req.body.message}</p>`,
        };

        sgMail.send(msg);
    });
}