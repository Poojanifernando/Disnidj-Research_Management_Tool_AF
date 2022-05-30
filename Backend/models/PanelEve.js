const { text } = require('body-parser');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
    
    Groupname:{
        type: String,
        required: true
    },
    introduction:{
        type: String,
        required: true
    },
    organization:{
        type: String,
        required: true
    },
    voiceInflection:{
        type: String,
        required: true
    },
    voiceRate:{
        type: String,
        required: true
    },
    tools:{
        type: String,
        required: true
    },
    eyeContact:{
        type: String,
        required: true
    },
    groupArrange:{
        type: String,
        required: true
    },
   
    Total:{
        type: String,
        required: true
    },

    
});

module.exports=mongoose.model('PanelEve',docSchema);