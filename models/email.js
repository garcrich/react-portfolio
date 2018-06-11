const mongoose = require('mongoose');
const { Schema } = mongoose;

const emailSchema = new Schema({
    from: String,
    emailAddress: String,
    subjectLine: String,
    body: String,
    date: Date
});

mongoose.model('emails', emailSchema);