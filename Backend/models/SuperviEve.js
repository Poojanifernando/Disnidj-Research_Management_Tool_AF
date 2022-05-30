const { text } = require('body-parser');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

const docSchemasuper = new mongoose.Schema({
    
    Groupname:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    abstract:{
        type: String,
        required: true
    },
    problemIdentified:{
        type: String,
        required: true
    },
    clearyStated:{
        type: String,
        required: true
    },
    references:{
        type: String,
        required: true
    },
    modelframework:{
        type: String,
        required: true
    },
    MethoDescription:{
        type: String,
        required: true
    },
    appro:{
        type: String,
        required: true
    },
    dataCollect:{
        type: String,
        required: true
    },
    dataAnalys:{
        type: String,
        required: true
    },
    conclusionClarity:{
        type: String,
        required: true
    },
    relevent:{
        type: String,
        required: true
    },
    clearWritten:{
        type: String,
        required: true
    },
    logic:{
        type: String,
        required: true
    },
    Total:{
        type: String,
        required: true
    },

    
});

module.exports=mongoose.model('StdDocSupervise',docSchemasuper);