const { response } = require('express');
const express = require('express');
//const req = require('express/lib/request');
//const res = require('express/lib/response');

const StdDoc=require('../models/PanelEve');

const router=express.Router();

//to Save Posts

router.post('/PanelEves/savePost',(req,res)=>{
    let newPost =new StdDoc(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Saved successfullu"
        });
    });
});

//to get all details

router.get('/GetAlldetails',(req,res)=>{
    StdDoc.find().exec((err,GetAllposts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingDocs:GetAllposts
        });
    });
});

//get a speciic detail

router.get("/getOneDetail/:id",(req,res)=>{
    let DetailID = req.params.id;

    StdDoc.findById(DetailID,(err,getOneDetail)=>{
        if(err){
            return res.status(400).json({
                success:false,
                err     })
        }
        return res.status(200).json({
            success:true,
            getOneDetail
        });
    });
});




//to update details

router.put('/stdDetail/update/:id',(req,res)=>{
    StdDoc.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,stdDetails)=>{
            if(err){
                return response.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"updated"
            });
        }
    );
});


//delete specific details
router.delete('/stdDetails/delete/:id',(req,res)=>{
    StdDoc.findByIdAndRemove(req.params.id).exec((err,deletedDetails)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessfull",err
        });
        return res.json({message:"Delete successfull", deletedDetails});
    });
});







module.exports=router;
