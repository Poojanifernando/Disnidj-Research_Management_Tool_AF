const { response } = require('express');
const mongoose = require('mongoose');
const cloudinary = require("../utils/cloudinary");
const express = require('express');
const multer  = require('multer')
const uuid=require('uuid').v4;
const path = require('path');
const adminUpload=require('../models/adminUpload');
const router=express.Router();

const files=[];
const fileInArray=[]

//cb= callback function
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,"uploads")

    },
    filename:(req,file,cb)=>{
        let filePath=[];
        console.log("MULTER ENTRY ",file.originalname)
        console.log("files",req.files)
        
        const ext = path.extname(file.originalname);
        const id = uuid();
        filePath = `${id}${ext}`;
        fileInArray.push([(filePath)])  
        console.log("IN ARRAY ",filePath)        
        files.push(fileInArray)
        console.log("PUSHED MAIN ARRAY", fileInArray)    
        cb(null,filePath)       
        console.log("current length",files.length)
    }
  })

  const upload=multer({
    
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "application/pdf") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Only .pdf format allowed!'));
      }
  },
  storage:storage,
  })
 
  // post method
router.post("/admin", upload.array('uploaded_Image', 10), async (req, res) => {
    try {
   
      console.log(req.files.length)
       console.log("Files",fileInArray)
     
       let pdff;
   
     for(let i=0;i<fileInArray.length;i++){
       let fileext = fileInArray[i][0].split('.')[1];
       console.log(path.resolve(__dirname, "../uploads"))
       if(fileext=="pdf")
       pdff = await cloudinary.uploader.upload(`${path.resolve(__dirname, "../uploads")}/${fileInArray[i][0]}`,{ pages: true });
     }
   
      let user = new adminUpload({
        name: req.body.name,
       
        pdf : pdff.secure_url,
       
        cloudinary_id_pdf: pdff.public_id,
      });
      
      await user.save();
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  });   

  //get method
  router.get("/admin", async (req, res) => {
    try {
      let user = await adminUpload.find();
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  });
  




module.exports=router;