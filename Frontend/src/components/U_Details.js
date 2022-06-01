// import React, { Component } from 'react';
// import axios from 'axios';


// export default class Details extends Component {
    
//     constructor(props){
//         super(props);
//         this.state={
//             travelor:{}
//         };
//     }

//     componentDidMount(){
//         const id = this.props.match.params.id;
 
//         axios.get(`http://localhost:8000/travelor/${id}`).then((res)=>{  //post ->postRamona
//             if(res.data.success){
//                 this.setState({
//                     travelor:res.data.travelor
//                 });
 
//                 console.log(this.state.travelor);
//             }
//         });
//     }
    
//     render() {

//         const {Name,NIC,Phone,Email,type,date}=this.state.travelor;

//         return (
//             <div className="details" style={{marginTop:'20px'}}>
//                 <h4>{Name}</h4>
//                 <hr/>
//                 <dl className="row">
//                     <dt className="col-sm-3"> NIC</dt>
//                     <dd className="col-sm-9">{NIC}</dd>

//                     <dt className="col-sm-3">Phone Number</dt>
//                     <dd className="col-sm-9">{Phone}</dd>

//                     <dt className="col-sm-3">Email Address</dt>
//                     <dd className="col-sm-9">{Email}</dd>

//                     <dt className="col-sm-3">Type of reservation</dt>
//                     <dd className="col-sm-9">{type}</dd>

//                     <dt className="col-sm-3">Date of reservation</dt>
//                     <dd className="col-sm-9">{date}</dd>

                
//                 </dl>

//             </div>
//         )
        
       
//     }
// }

import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";



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
                  
                    <li className="nav-item"><a className="nav-link" href="/topicReg" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Topic Registration</a></li>
                    <li className="nav-item"><a className="nav-link" href="/ViewAreas" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Research Areas and Topics</a></li>
                   
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Panel Evaluations</a></li>
                    
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Documents and templates</a></li>
                    
                  
                    
                    <li><a className="btn btn-warning"  href="/" style={{height:"40px",width:"100px", marginTop:"8px", marginLeft:"900px"}}>Log Out</a></li>
                   
                  
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
        <form className="row g-3">
          <div className="form-group" >
                <div  style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Name of the group : </label>
                     <input type="text"
                     name="GName"
                    onChange={e => setGName(e.target.value)}
                     value={GName}
                     placeholder="Create a name for the group"
                     />
                 </div>
                 </div>
                 <div className="form-group" >
                 <div style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Member 1 : </label>
                     <input type="text"
                     name="student1"
                    onChange={e => setstudent1(e.target.value)}
                     value={student1}  
                     placeholder="Name of the first member"
                   />
                 </div>
                 </div>
                 <div className="form-group" >
                 <div  style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Member 2 : </label>
                     <input type="text"
                     name="student2"
                    onChange={e => setstudent2(e.target.value)}
                     value={student2}  
                     placeholder="Name of the second member"
                   
                     />
                 </div>
                 </div>

                <div className="form-group" >
                 <div  style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Member 3 : </label>
                     <input type="text"
                     name="student3"
                    onChange={e => setstudent3(e.target.value)}
                     value={student3}  
                     placeholder="Name of the third member"
                 
                     />
                 </div>
                 </div>

                 <div className="form-group" >
                 <div style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Member 4 : </label>
                     <input type="text"
                     name="student4"
                     onChange={e => setstudent4(e.target.value)}
                     value={student4}
                     placeholder="Name of the fourth member"
                   
                     />
                    
                 </div>
                 </div>

                 <div className="form-group" >
                 <div  style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Name of the Leader : </label>
                     <input type="text"
                     name="Leader"
                     onChange={e => setdate(e.target.value)}
                     value={Leader}  
                     placeholder="IT number of the leader"
                  
                    />
                 </div>
                 </div>

                <center>
                 <button type="submit"  onClick={(e)=>changeOnClick(e)}>Update and Confirm Group Details</button><br/><br/>
                 <a className="btn btn-primary" href = "/" style = {{textDecoration:'none'}} >Request Supervisors</a>&nbsp;&nbsp;&nbsp;
                 <a className="btn btn-danger btn-block" href='#' onClick={() =>this.onDelete(groups._id)}>
              &nbsp;Delete Group</a>
                 </center>
                 </form>

                </center>
        </div>
        </div>

    );
  }