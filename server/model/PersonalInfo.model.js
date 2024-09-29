const mongoose = require('mongoose');

const PersonalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    panCardNumber: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    referenceNumber: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('PersonalInfo', PersonalSchema)