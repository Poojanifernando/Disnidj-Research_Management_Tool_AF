const { text } = require('body-parser');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
    
    Groupname:{
        type: String,
        required: true
    },
    introduction:{
        type: Intl,
        required: true
    },
    organization:{
        type: Intl,
        required: true
    },
    voiceInflection:{
        type: Intl,
        required: true
    },
    voiceRate:{
        type: Intl,
        required: true
    },
    tools:{
        type: Intl,
        required: true
    },
    eyeContact:{
        type: Intl,
        required: true
    },
    groupArrange:{
        type: Intl,
        required: true
    },
   
    Total:{
        type: Intl,
        required: true
    },

    
});

module.exports=mongoose.model('PanelEve',docSchema);