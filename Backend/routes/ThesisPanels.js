const express = require('express');
const thesis = require('../models/ThesisPanels');
const ThesisPanels = require('../models/ThesisPanels');

const router = express.Router();

//add panels

router.post('/ThesisPanels/save',(req,res)=>{

    let newPanel = new ThesisPanels(req.body);

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
router.get('/ThesisPanels',(req ,res) =>{
    ThesisPanels.find().exec((err,thesis) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingThesisPanels:thesis
        });
    });
});

//update the panel

router.put('/ThesisPanels/update/:id',(req,res)=>{
    ThesisPanels.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, thesis) =>{
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
router.delete('/ThesisPanels/delete/:id',(req,res)=>{
    ThesisPanels.findByIdAndRemove(req.params.id).exec((err,deletedThesisPanels) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedThesisPanels
        });
    });
});


//get specific topic panel
router.get(`/ThesisPanels/:id`,(req,res) =>{
    let ThesisPanelsId = req.params.id;
    ThesisPanels.findById(ThesisPanelsId,(err,thesis)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            thesis
        });
    });
});


module.exports = router;