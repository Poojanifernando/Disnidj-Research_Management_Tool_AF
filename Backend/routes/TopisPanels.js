const express = require('express');
const topic = require('../models/TopisPanels');
const TopicPanels = require('../models/TopisPanels');

const router = express.Router();

//add panels

router.post('/TopicPanels/save',(req,res)=>{

    let newPanel = new TopicPanels(req.body);

    newPanel.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post saved successfully"
        });
    });
});

//get panels
router.get('/TopicPanels',(req ,res) =>{
    TopicPanels.find().exec((err,topic) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingTopicPanels:topic
        });
    });
});

//update the panel

router.put('/TopicPanels/update/:id',(req,res)=>{
    TopicPanels.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, topic) =>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});


//delete the panel
router.delete('/TopicPanels/delete/:id',(req,res)=>{
    TopicPanels.findByIdAndRemove(req.params.id).exec((err,deletedTopicPanels) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedTopicPanels
        });
    });
});


//get specific topic panel
router.get(`/TopicPanels/:id`,(req,res) =>{
    let TopicPanelsId = req.params.id;
    TopicPanels.findById(TopicPanelsId,(err,topic)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            topic
        });
    });
});


module.exports = router;