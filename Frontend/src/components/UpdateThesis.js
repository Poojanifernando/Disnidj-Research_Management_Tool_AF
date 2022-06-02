import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";



export default function UpdateThesis()  {

    const[GroupId, setGroupId] = useState("");
    const[PanelMember1 , setPanelMember1] = useState("");
    const[PanelMember2, setPanelMember2] = useState("");
    const[PanelMember3, setPanelMember3] = useState("");
    const[PanelMember4, setPanelMember4] = useState("");
  
    
    const id = useParams();
    

  

    const [thesis] = useState({
      GroupId: "",
      PanelMember1:"",
      PanelMember2:"",
      PanelMember3:"",
      PanelMember4:"",
      
      })

      const changeOnClick = async (e) =>{
        e.preventDefault();
   
        console.log("onclick");
       
        const formData = new FormData();
   
        formData.append("GroupId",GroupId);
        formData.append("PanelMember1",PanelMember1);
        formData.append("PanelMember2",PanelMember2);
        formData.append("PanelMember3",PanelMember3);
        formData.append("PanelMember4",PanelMember4); 
       
   
        setGroupId("");
        setPanelMember1("");
        setPanelMember2("");
        setPanelMember3("");
        setPanelMember4("");
   
        
        console.log(formData.get('GroupId')); 

      
        thesis.GroupId=formData.get('GroupId');
        thesis.PanelMember1=formData.get('PanelMember1');
        thesis.PanelMember2=formData.get('PanelMember2');
        thesis.PanelMember3=formData.get('PanelMember3');
        thesis.PanelMember4=formData.get('PanelMember4');
  
            
 
         console.log(thesis);
      

         console.log(id)
         await axios.put(`http://localhost:8000/ThesisPanels/update/${id?.id}`,thesis)
         .then(res=>{
             console.log("return data",res);
            alert("Update Successfull!!");
         })
         .catch(err=>{
             alert("update failed")
             console.log(err);
         });

        }
        

         useEffect(function effectFunction() {
             console.log("get ID",id);
            axios.get(`http://localhost:8000/ThesisPanels/${id?.id}`)
            .then(res=>{
                console.log("data",res);
                setGroupId(res.data.thesis.GroupId);
                setPanelMember1(res.data.thesis.PanelMember1);
                setPanelMember2(res.data.thesis.PanelMember2);
                setPanelMember3(res.data.thesis.PanelMember3);
                setPanelMember4(res.data.thesis.PanelMember4);
              
            
              
         })
            .catch(err => console.log(err));
          
          },[]);

    return (
        <div>
         <div>

         <br/>
            <center><h1>THESIS PANEL REGISTRATION UPDATE</h1></center> 
          <br/>


        <center>
        <table width = "950px" height = "500px" style={{margin: "20px"}}>
            <tr>
                <th>
                    <form>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}> Group ID  : </label>
                            <input type="text"
                            className="form-control"
                            name="GroupId"
                            onChange={e => setGroupId(e.target.value)}
                            value={GroupId}
                            placeholder="Update  group id "
                    
                        />
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{margineBottom:'5px'}}>Panel Member 1 : </label>
                        <input type="text"
                            className="form-control"
                        name="PanelMember1"
                        onChange={e => setPanelMember1(e.target.value)}
                        value={PanelMember1}
                        placeholder="Update member 1"
                    
                        />
                    </div>

               
                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{margineBottom:'5px'}}>  Panel Member 2 : </label>
                        <input type="text"
                        className="form-control"
                        name="PanelMember2"
                        onChange={e => setPanelMember2(e.target.value)}
                        value={PanelMember2}
                        placeholder="update member 2 "
                    
                        />
                    </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{margineBottom:'5px'}}>Panel Member 3 : </label>
                        <input type="text"
                        className="form-control"
                        name="PanelMember3"
                        onChange={e => setPanelMember3(e.target.value)}
                        value={PanelMember3}
                        placeholder="update member 3"
                    
                        />
                    </div>
           
                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{margineBottom:'5px'}}>Panel Member 4 : </label>
                        <input type="text"
                        className="form-control"
                        name="PanelMember4"
                        onChange={e => setPanelMember4(e.target.value)}
                        value={PanelMember4}
                        placeholder="select the job title"
                        />
                    
                    </div>


                       
                
     


                        <button className="btn btn-warning" style = {{textDecoration:'none',color:'white'}} type="submit"  onClick={(e)=>changeOnClick(e)}> 
                        <i className="far fa-check-square"></i> UPDATE </button> &nbsp;

                        <button className="btn btn-warning"><a  href = "/ViewThesis" style = {{textDecoration:'none',color:'white',marginTop:'15px'}} >VIEW DETAILS</a></button>

                 </form>
                 </th>
                 </tr>
                 </table>

                </center>
        </div>
        </div>

    );
  }

