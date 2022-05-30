const { response } = require('express');
const express = require('express');
//const req = require('express/lib/request');
//const res = require('express/lib/response');

const StdDocSuper=require('../models/SuperviEve');

const router=express.Router();

//to Save Posts

router.post('/SuperviEve/savePost',(req,res)=>{
    let newPost =new StdDocSuper(req.body);

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

router.get('/GetAlldetailssuper',(req,res)=>{
    StdDocSuper.find().exec((err,GetAllposts)=>{
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

router.get("/getOneDetailsuper/:id",(req,res)=>{
    let DetailID = req.params.id;

    StdDocSuper.findById(DetailID,(err,getOneDetail)=>{
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

router.put('/SuperviEve/update/:id',(req,res)=>{
    StdDocSuper.findByIdAndUpdate(
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
router.delete('/SuperviEve/delete/:id',(req,res)=>{
    StdDocSuper.findByIdAndRemove(req.params.id).exec((err,deletedDetails)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessfull",err
        });
        return res.json({message:"Delete successfull", deletedDetails});
    });
});







module.exports=router;
