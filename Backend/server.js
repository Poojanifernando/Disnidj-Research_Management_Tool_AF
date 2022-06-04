const express = require('express');
const mongoose = require('mongoose');
const bodyPaser=require('body-parser');
const app = express();
const cors=require('cors');
const dotenv = require('dotenv');
 
//upload file
const fileUpload = require('express-fileupload');
//app.use(fileUpload());
dotenv.config();


//debi
const thesisRoutes = require('./routes/thesisRoute');

//import routs
//disni
const postRoutes = require('./routes/PanelEve');
const postRoutes2 =require('./routes/SuperviEve');
const postRoutes3 =require('./routes/adminUpload');
const postRoutes4=require('./routes/studentSubmit');
const postRoutes5=require('./routes/PresTempUpload');
//app.use("/user", require("./routes/user"));


//Ramona
const topicRoutes = require('./routes/topics');
const groupRoutes = require('./routes/group');
const areaRoutes = require('./routes/areas');

//anodya
const TopisPanelsRoutes = require ('./routes/TopisPanels');
const ThesisPanelsRoutes = require ('./routes/ThesisPanels');
const PresentationPanelsRoutes = require ('./routes/PresentationPanels');
const userRoutes = require ('./routes/userRoutes');


//app middleware
app.use(bodyPaser.json());
app.use(cors());
app.use(express.json());

//rout middleware
//debi
app.use(thesisRoutes);
//disni
app.use(postRoutes);
app.use(postRoutes2);
app.use(postRoutes3);
app.use(postRoutes4);
app.use(postRoutes5);

//Ramona
app.use(topicRoutes);
app.use(groupRoutes);
app.use(areaRoutes);

//anodya
app.use(TopisPanelsRoutes);
app.use(ThesisPanelsRoutes);
app.use(PresentationPanelsRoutes);
app.use(userRoutes);

//port
const PORT = 8000;
const DB_URL='mongodb+srv://twg:twg123@twg.ibf9s.mongodb.net/Project0?retryWrites=true&w=majority'
//connect db
mongoose.connect(DB_URL)
    
    
//,process.env.MONGO_URI,{
    //useCreateIndex: true,
    //useNewUrlParser: true,
    //useFindAndModify: false,
    //useUnifiedTopology: true,
//})
.then(() => {
    console.log('DB connected');
})
.catch((err)=> console.log('DB connection error',err));

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});











