const mongoose = require('mongoose');

const contactUsSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userPhoneNo: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
})

const contactUs = mongoose.model('contactUsTable', contactUsSchema);

module.exports = contactUs;