import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import grp from '../../public/grp.jpg';


export default function UpdateDetails()  {

    const[GName, setGName] = useState("");
    const[student1 , setstudent1] = useState("");
    const[student2, setstudent2] = useState("");
    const[student3, setstudent3] = useState("");
    const[student4, setstudent4] = useState("");
    const[Leader, setLeader] = useState("");

    
    const id = useParams();
    

  

    const [group] = useState({
        GName:"",
        student1:"",
        student2:"",
        student3:"",
        student4:"",
        Leader:""
       
      })

      const changeOnClick = async (e) =>{
        e.preventDefault();
   
        console.log("execute onclick");
       
        const formData = new FormData();
   
        formData.append("GName",GName);
        formData.append("student1",student1);
        formData.append("student2",student2);
        formData.append("student3",student3);
        formData.append("student4",student4); 
        formData.append("Leader",Leader);
        
   
        setGName("");
        setstudent1("");
        setstudent2("");
        setstudent3("");
        setstudent4("");
        setLeader("");
     
        console.log(formData.get('GName')); 

      
        group.GName=formData.get('GName');
        group.student1=formData.get('student1');
        group.student2=formData.get('student2');
        group.student3=formData.get('student3');
        group.student4=formData.get('student4');
        group.Leader=formData.get('Leader');
            
 
         console.log(group);
      

         console.log(id)
         await axios.put(`http://localhost:8000/group/update/${id?.id}`,group)
         .then(res=>{
             console.log("return data",res);
            alert("Group is updated successfully!!");
         })
         .catch(err=>{
             alert("Failed to update..!!")
             console.log(err);
         });

        }
        
        onDelete = (id) =>{

          axios.delete(`http://localhost:8000/group/delete/${id}`).then((res) =>{
            alert("Deleted successfully!");
            this.retriveGroups();
          })
        }

         useEffect(function effectFunction() {
             console.log("get ID",id);
            axios.get(`http://localhost:8000/group/${id?.id}`)
            .then(res=>{
                console.log("data",res);
                setGName(res.data.group.GName);
                setstudent1(res.data.group.student1);
                setstudent2(res.data.group.student2);
                setstudent3(res.data.group.student3);
                setstudent4(res.data.group.student4);
                setLeader(res.data.group.Leader);
           
         })
            .catch(err => console.log(err));
          
          },[]);

          return (
            <div>
           <div>
              
           <nav className="navbar navbar-light navbar-expand-md bg-dark navigation-clean-search">
            <div><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link "href="/groupreg" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Group Registration</a></li>
                      
                        <li className="nav-item"><a className="nav-link" href="/groups" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Registered Groups</a></li>
                        <li className="nav-item"><a className="nav-link" href="/ViewAreas" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Research Areas and Topics</a></li>
                       
                        <li className="nav-item"><a className="nav-link" href="/EvaluationResult" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Panel Evaluations Results</a></li>
                        
                        <li className="nav-item"><a className="nav-link" href="/STDdownloads" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Documents and templates</a></li>
                        
                        <li className="nav-item"><a className="nav-link" href="/SubmitNavbar" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Documents Submission page</a></li>
                        
                      
                        
                        <li><a className="btn btn-warning"  href="/" style={{height:"40px",width:"100px", marginTop:"8px", marginLeft:"800px"}}>Log Out</a></li>
                       
                      
                    </ul>
                    
                    
                </div>
            </div>
        </nav>
                </div>
      
            <div>
      
             <br/>
                <center><h1>Details of the Group</h1></center> 
              <br/>
      
      
            <center>
              <p><b>Step 3 : You can update your group details here. If you want to proceed, refer the research areas and related topics to select a topic for the group. </b></p>
              
               <table>
             <tr>
                 <td>
              <div className="col-md-8 mt-4 mx-auto">
              <form className="row g-3" style={{backgroundColor:"#ebecf0"}}>
            
      
            <div className="form-group">
              <h4>Name of the Group :</h4>
            <label className="form-label"></label>
                <input type="text"
                className="form-control"
                name="GName"
                onChange={e => setGName(e.target.value)}
                value={GName}  
                
              />
            </div>
      
           
      
           <div className="form-group">
              <h4>Name of Member 1 :</h4>
            <label className="form-label"></label>
                <input type="text"
                className="form-control"
                name="student1"
                onChange={e => setstudent1(e.target.value)}
                value={student1}  
                
              />
            </div>
      
      <div className="form-group">
              <h4>Name of Member 2 :</h4>
            <label className="form-label"></label>
                <input type="text"
                className="form-control"
                name="student2"
                onChange={e => setstudent2(e.target.value)}
                value={student2}  
                
              />
            </div>
      
      <div className="form-group">
              <h4>Name of Member 3 :</h4>
            <label className="form-label"></label>
                <input type="text"
                className="form-control"
                name="student3"
                onChange={e => setstudent3(e.target.value)}
                value={student3}  
                
              />
            </div>
      
      <div className="form-group">
              <h4>Name of Member 4 :</h4>
            <label className="form-label"></label>
                <input type="text"
                className="form-control"
                name="student4"
                onChange={e => setstudent4(e.target.value)}
                value={student4}  
                
              />
            </div>
      
      <div className="form-group">
              <h4>IT number of the Leader :</h4>
            <label className="form-label"></label>
                <input type="text"
                className="form-control"
                name="Leader"
                onChange={e => setLeader(e.target.value)}
                value={Leader}  
                
              />
            </div>
      
            </form>
                   <button className="btn btn-success" type="submit" style={{marginTop:'15px', width:"250px", marginLeft:"150px",backgroundColor:"#0147ab"}} onClick={(e)=>changeOnClick(e)} >
                       <i className="far fa-check-square"></i>
                       &nbsp; Update and confirm group details
      
                   </button>
            
           
                     
      </div>
      </td>
         
            <td>
            <center>
              
                     <img src={grp} class="img-fluid" alt="" width="1500" height="1000" margin-left="100px"/>
                     <br/><br/>
                     <a className="btn btn-primary" href = "/ViewAreas" style = {{textDecoration:'none'}} >Select a topic</a>&nbsp;&nbsp;&nbsp;
                     <a className="btn btn-danger btn-block" href='#' onClick={() =>this.onDelete(groups._id)}>
                  &nbsp;Delete Group</a>
      
             </center>
             </td>
             </tr>
      </table>
            </center>
            </div>
            </div>
      
        );
  }