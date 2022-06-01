const mongoose = require('mongoose');

const TopisPanelsSchema = new mongoose.Schema({

    GroupId:{
        type:String,
        required:true
    },

    PanelMember1:{
    type:String,
    required:true
    },

    PanelMember2:{
    type:String,
    required:true
    },

    PanelMember3:{
    type:String,
    required:true
    },

    PanelMember4:{
    type:String,
    required:true
    }

 


});

module.exports = mongoose.model('TopicPanels',TopisPanelsSchema);