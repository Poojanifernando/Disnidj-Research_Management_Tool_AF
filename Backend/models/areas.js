//to get the database model
const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({

//columns, properties of the schema

    Area:{
        type : String,
        required:true
    },
 
    Topics:{
        type : String,
        required:true
    }
});

module.exports = mongoose.model('Areas', areaSchema)