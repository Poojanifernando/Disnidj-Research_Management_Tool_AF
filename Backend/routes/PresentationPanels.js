const express = require('express');
const present = require('../models/PresentationPanels');
const PresentationPanels = require('../models/PresentationPanels');

const router = express.Router();

//add panels

router.post('/PresentationPanels/save',(req,res)=>{

    let newPanel = new PresentationPanels(req.body);

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
router.get('/PresentationPanels',(req ,res) =>{
    PresentationPanels.find().exec((err,present) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingPresentationPanels:present
        });
    });
});

//update the panel

router.put('/PresentationPanels/update/:id',(req,res)=>{
    PresentationPanels.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, present) =>{
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
router.delete('/PresentationPanels/delete/:id',(req,res)=>{
    PresentationPanels.findByIdAndRemove(req.params.id).exec((err,deletedPresentationPanels) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedPresentationPanels
        });
    });
});


//get specific topic panel
router.get(`/PresentationPanels/:id`,(req,res) =>{
    let PresentationPanelsId = req.params.id;
    PresentationPanels.findById(PresentationPanelsId,(err,present)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            present
        });
    });
});


module.exports = router;