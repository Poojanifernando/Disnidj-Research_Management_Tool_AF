const mongoose = require('mongoose');

const ThesisSchema = new mongoose.Schema ({
    thesis : {
        type : String,
        required : [true, "Can't be blank"]
    },
}, {minimize : false});

const Thesis = mongoose.model('Thesis', ThesisSchema);

module.exports = Thesis;