import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";



export default function UpdateAllDetails()  {

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
         await axios.put(`http://localhost:8000/topic/update/${id?.id}`,topic)
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
            <center><h1>Allocation of Supervisors</h1></center> 
          <br/>
          <center>
          <table width = "1000px" style={{fontFamily: "-moz-initial"}}>

          <thead>
          <tr>
   
            <th >Supervisors for IT Specialization</th>  
            
            <th>Co-Supervisors for IT Specialization</th> 

            <th>Supervisors for SE Specialization</th> 

            <th>Co-Supervisors for SE Specialization</th> </tr>

            </thead>
            <tbody>
            <tr> <td>Lec. Kamal Gamage</td> <td>inst. Nimal Silva</td> <td>Lec. Malan Gamage</td> <td>inst. Ruwan Silva</td></tr>
            <tr> <td>Lec. Warun Perera</td><td>Lec. Anura Perera</td><td>Lec. Arun Perera</td><td>Lec. Olu Perera</td></tr>
            <tr> <td>Lec. Jayaweera Fernando</td>  <td>inst. Adithaya Silava</td> <td>Lec. Jayaweera Fernando</td>  <td>inst. Ayesh Silava</td> </tr>
            <tr>  <td>Lec. Nimal Gamage</td>    <td>inst. Jayaweera Fernando</td> <td>Lec. Kamlee Gamage</td>    <td>inst. Poojani Fernando</td> </tr>
            <tr>  <td>Lec. Nuwan Perera</td>     <td> Assit Lec. Gunarathna Fernando</td> <td>Lec. Miran Perera</td>    <td> Assit Lec. Ruwan Fernando</td></tr>
            <tr>  <td>Lec. Lakshika Perera</td>    <td>inst. Jayaweera Fernando</td> <td>Lec. Nuwani Perera</td>    <td>inst. Disni Fernando</td>  </tr>
            <tr> Assit Lec. Gunarathna Fernando    <td>inst. Nirmani Fernando</td>Assit Lec. Waruni Fernando    <td>inst. Randimal Fernando</td> </tr>
            <tr><td>Lec. Nimalee Perera</td>    <td>inst. Wihara Fernando</td> <td>Lec. Rasika Perera</td>    <td>inst. Wihara Fernando</td> </tr>
            <tr> <td>Lec. Awan Perera</td>  <td>inst. Jayaweera Silva</td> <td>Lec. Malee Perera</td>  <td>inst. Jayaweera Silva</td></tr>
            <tr> <td>Assit Lec. Warun Perera</td> <td>inst. madanayaka Fernando</td><td>Assit Lec. Anjalee Perera</td> <td>inst. madanayaka Fernando</td></tr>
            <tr> <td>Lec. Sauri Fernando</td><td> Assit Lec. Anuni Fernando</td><td>Lec. Supipi Fernando</td><td> Assit Lec. Anuni Fernando</td> </tr>



            <br/>
            <tr>
            <th>Supervisors for DS Specialization</th> 
            
            <th>Co-Supervisors for DS Specialization</th> 
            
            <th>Supervisors for IM Specialization</th> 
            
            <th>Co-Supervisors for IM Specialization</th> </tr>
            
            <tr> <td>Lec. Malan Gamage</td> <td>inst. Ruwan Silva</td> <td>Lec. Malan Gamage</td> <td>inst. Ruwan Silva</td></tr>
            <tr> <td>Lec. Arun Perera</td><td>Lec. Olu Perera</td><td>Lec. Arun Perera</td><td>Lec. Olu Perera</td></tr>
            <tr> <td>Lec. Jayaweera Fernando</td>  <td>inst. Ayesh Silava</td> <td>Lec. Jayaweera Fernando</td>  <td>inst. Ayesh Silava</td></tr>
            <tr>  <td>Lec. Kamlee Gamage</td>    <td>inst. Poojani Fernando</td> <td>Lec. Kamlee Gamage</td>    <td>inst. Poojani Fernando</td></tr>
            <tr>  <td>Lec. Miran Perera</td>     <td> Assit Lec. Ruwan Fernando</td><td>Lec. Miran Perera</td>     <td> Assit Lec. Ruwan Fernando</td></tr>
            <tr>  <td>Lec. Nuwani Perera</td>    <td>inst. Disni Fernando</td><td>Lec. Nuwani Perera</td>    <td>inst. Disni Fernando</td> </tr>
            <tr> Assit Lec. Waruni Fernando    <td>inst. Randimal Fernando</td>Assit Lec. Waruni Fernando    <td>inst. Randimal Fernando</td> </tr>
            <tr><td>Lec. Rasika Perera</td>    <td>inst. Wihara Fernando</td> <td>Lec. Rasika Perera</td>    <td>inst. Wihara Fernando</td> </tr>
            <tr> <td>Lec. Malee Perera</td>  <td>inst. Jayaweera Silva</td><td>Lec. Malee Perera</td>  <td>inst. Jayaweera Silva</td></tr>
            <tr> <td>Assit Lec. Anjalee Perera</td> <td>inst. madanayaka Fernando</td><td>Assit Lec. Anjalee Perera</td> <td>inst. madanayaka Fernando</td></tr>
            <tr> <td>Lec. Supipi Fernando</td><td> Assit Lec. Anuni Fernando</td><td>Lec. Supipi Fernando</td><td> Assit Lec. Anuni Fernando</td> </tr>


           
          
            
     
   
   
     </tbody>
     
</table>
</center>

        <center>
        <div className="col-md-8 mt-4 mx-auto">
          <form className="row g-3" style={{backgroundColor:"#ebecf0"}}>
             
        {/* <div className="form-group" >
                 <div style={{marginBottom:'15px'}}>
                     <label style={{margineBottom:'5px'}}>Selected Research area : </label>
                     <input type="text"
                     name="Area"
                    onChange={e => setArea(e.target.value)}
                     value={Area}  
                     placeholder="Research area"
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
                     placeholder="Research topic"
                   
                     />
                 </div>
                 </div> */}
                 <br/>
                 <br/>
  <a><b> Please select the Supervisors according to your specializations. Do not change the Supervisor or the Co-Supervisor after the request is accepted by them</b></a>

                <div className="form-group" >
                     <label className="form-label"><h5>Selected Supervisor: </h5></label>
                     
                     <input type="text"
                     name="Supervisors"
                    onChange={e => setSupervisors(e.target.value)}
                     value={Supervisors}
                     placeholder="Select a name"
                     
                 
                     />
                   
                 </div>
          

                 <div className="form-group" >
                     <label className="form-label"><h5>Supervisor's Response: </h5></label>
                     
                     <input type="text"
                     name="SState"
                     onChange={e => setSState(e.target.value)}
                     value={SState}  
                     list="SStates"
                     
                  
                    />
                     <datalist id="SStates">
                          <option value="Supervisor response - pending"></option>

                          </datalist>
                 </div>
             

                 <div className="form-group" >
                     <label className="form-label"><h5>Selected Co-Supervisor: </h5></label>
                     
                     <input type="text"
                     name="CoSupervisors"
                     onChange={e => setCoSupervisors(e.target.value)}
                     value={CoSupervisors}
                   
                   
                     />
                    
                 </div>
                 

                 {/* <div className="form-group" >
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
                     <label style={{margineBottom:'5px'}}>Name of the Leader : </label>
                     <input type="text"
                     name="Leader"
                     onChange={e => setLeader(e.target.value)}
                     value={Leader}  
                     
                  
                    />
                 </div>
                 </div> */}

                 

<div className="form-group" >
                     <label className="form-label"><h5>Co-Supervisor's Response: </h5></label>
                     
                     <input type="text"
                     name="CState"
                     onChange={e => setCState(e.target.value)}
                     value={CState}  
                     list="CStates"
                     
                  
                     />
                      <datalist id="CStates">
                           <option value="Supervisor response - pending"></option>
 
                    </datalist>
                 </div>

                 <center>
                 <button className="btn btn-success" type="submit"  onClick={(e)=>changeOnClick(e)}>Submit Response</button><br/><br/>
                
                 </center>
                
                 </form>
</div>
                </center>
        </div>
        </div>

    );
  }

