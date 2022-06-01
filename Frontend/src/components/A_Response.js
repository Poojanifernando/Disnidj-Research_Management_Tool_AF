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

    const[Area, setArea] = useState("");
    const[Topic , setTopic] = useState("");
    const[Supervisors, setSupervisors] = useState("");
    const[CoSupervisors, setCoSupervisors] = useState("");
    const[GroupName, setGroupName] = useState("");
    const[Leader, setLeader] = useState("");
    const[SState, setSState] = useState("");
    const[CState, setCState] = useState("");
    const[Comments, setComments] = useState("");

    
    const id = useParams();
    

  

    const [topic] = useState({
        Area:"",
        Topic:"",
        Supervisors:"",
        CoSupervisors:"",
        GroupName:"",
        Leader:"",
        SState:"",
        CState:"",
        Comments:""
       
      })

      const changeOnClick = async (e) =>{
        e.preventDefault();
   
        console.log("execute onclick");
       
        const formData = new FormData();
   
        formData.append("Area",Area);
        formData.append("Topic",Topic);
        formData.append("Supervisors",Supervisors);
        formData.append("CoSupervisors",CoSupervisors);
        formData.append("GroupName",GroupName); 
        formData.append("Leader",Leader);
        formData.append("SState",SState);
        formData.append("CState",CState);
        formData.append("Comments",Comments);
        
   
        setArea("");
        setTopic("");
        setSupervisors("");
        setCoSupervisors("");
        setGroupName("");
        setLeader("");
        setSState("");
        setCState("");
        setComments("");
     
        console.log(formData.get('Area')); 

      
        topic.Area=formData.get('Area');
        topic.Topic=formData.get('Topic');
        topic.Supervisors=formData.get('Supervisors');
        topic.CoSupervisors=formData.get('CoSupervisors');
        topic.GroupName=formData.get('GroupName');
        topic.Leader=formData.get('Leader');
        topic.SState=formData.get('SState');
        topic.CState=formData.get('CState');
        topic.Comments=formData.get('Comments');
            
 
         console.log(topic);
      

         console.log(id)
         await axios.put(`http://localhost:8000/topic/update/${id?.id}`,group)
         .then(res=>{
             console.log("return data",res);
            alert("Response sent successfully!!");
         })
         .catch(err=>{
             alert("Failed to send response..!!")
             console.log(err);
         });

        }
        

         useEffect(function effectFunction() {
             console.log("get ID",id);
            axios.get(`http://localhost:8000/topic/${id?.id}`)
            .then(res=>{
                console.log("data",res);
                setArea(res.data.topic.Area);
                setTopic(res.data.topic.Topic);
                setSupervisors(res.data.topic.Supervisors);
                setCoSupervisors(res.data.topic.CoSupervisors);
                setGroupName(res.data.topic.GroupName);
                setLeader(res.data.topic.Leader);
                setSState(res.data.topic.SState);
                setCState(res.data.topic.CState);
                setComments(res.data.topic.Comments);
           
           
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
            <center><h1>Confirmation of the availability of the Supervisors</h1></center> 
          <br/>


        <center>
        <form className="row g-3">
          
                 <div className="form-group" >
                 <div style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Selected Research area : </label>
                     <input type="text"
                     name="Area"
                    onChange={e => setArea(e.target.value)}
                     value={Area}  
    
                   />
                 </div>
                 </div>
                 <div className="form-group" >
                 <div  style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Selected topic : </label>
                     <input type="text"
                     name="Topic"
                    onChange={e => setTopic(e.target.value)}
                     value={Topic}  
                
                   
                     />
                 </div>
                 </div>


                <div className="form-group" >
                 <div  style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Name of the selected Supervisor : </label>
                     <input type="text"
                     name="Supervisors"
                    onChange={e => setSupervisors(e.target.value)}
                     value={Supervisors}
                     
                     
                 
                     />
                 </div>
                 </div>

                 <div className="form-group" >
                 <div style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Name of the selected Co-Supervisor : </label>
                     <input type="text"
                     name="CoSupervisors"
                     onChange={e => setCoSupervisors(e.target.value)}
                     value={CoSupervisors}
                   
                   
                     />
                    
                 </div>
                 </div>

                 <div className="form-group" >
                <div  style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Name of the group : </label>
                     <input type="text"
                     name="GroupName"
                    onChange={e => setGroupName(e.target.value)}
                     value={GroupName}
                     
                     />
                 </div>
                 </div>


                 <div className="form-group" >
                 <div  style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Response from the Supervisor : </label>
                     <input type="text"
                     name="SState"
                     onChange={e => setSState(e.target.value)}
                     value={SState}  
                     
                  
                    />
                 </div>
                 </div>

                 <div className="form-group" >
                 <div  style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Response from the Co-Supervisor : </label>
                     <input type="text"
                     name="CState"
                     onChange={e => setCState(e.target.value)}
                     value={CState}  
                     
                  
                    />
                 </div>
                 </div>


                <center>
                 <button type="submit"  onClick={(e)=>changeOnClick(e)}>Submit Response</button><br/><br/>
  
                 </center>
                 </form>

                </center>
        </div>
        </div>

    );
  }