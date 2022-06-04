const router = require('express').Router();
const Thesis = require('../models/Thesis');

//creating thesis
router.post('/thesis/save', async(req, res) => {
    try{
        const {thesis} = req.body;
        console.log(req.body);
        const t = await Thesis.create({thesis});
        res.status(201).json(t);
    } catch(e) {
        let msg;
        if(e.code == 11000) {
            msg = "Data already exists"
        } 
        console.log(e);
        res.status(400).json(msg);
    }
})
//view thesis
router.get('/thesis',(req ,res) =>{
    Thesis.find().exec((err,thesis) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingThesis:thesis
        });
    });
});


//delete the thesis
router.delete('/thesis/delete/:id',(req,res)=>{
    Thesis.findByIdAndRemove(req.params.id).exec((err,deletedThesis) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedThesis
        });
    });
});


//get specific topic panel
router.get(`/thesis/:id`,(req,res) =>{
    let ThesisID = req.params.id;
    Thesis.findById(ThesisID,(err,thesis)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            thesis
        });
    });
});


module.exports = router