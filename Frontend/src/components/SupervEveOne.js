import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";



export default function SupervEveOne()  {

    const[Groupname, setGroupname] = useState("");
    const[title , settitle] = useState("");
    const[abstract, setabstract] = useState("");
    const[problemIdentified, setproblemIdentified] = useState("");
    const[clearyStated, setclearyStated] = useState("");
    const[references, setreferences] = useState("");
    const[modelframework, setmodelframework] = useState("");
    const[MethoDescription, setMethoDescription] = useState("");
    const[appro, setappro] = useState("");
    const[dataCollect, setdataCollect] = useState("");
    const[dataAnalys, setdataAnalys] = useState("");
    const[conclusionClarity, setconclusionClarity] = useState("");
    const[relevent, setrelevent] = useState("");
    const[clearWritten, setclearWritten] = useState("");
    const[logic, setlogic] = useState("");
    const[Total, setTotal] = useState("");
    
    
    const id = useParams();
    

  

    const [paneleve] = useState({
      Groupname:"",
      title:"",
      abstract:"",
      problemIdentified:"",
      clearyStated:"",
      references:"",
      modelframework:"",
      MethoDescription:"",
      appro:"",
      dataCollect:"",
      dataAnalys:"",
      conclusionClarity:"",
      relevent:"",
      clearWritten:"",
      logic:"",
      Total:""
      })

     
        

         useEffect(function effectFunction() {
             console.log("get ID",id);
            axios.get(`http://localhost:8000/getOneDetailsuper/${id?.id}`)
            .then(res=>{
                console.log("data",res);
                setGroupname(res.data.getOneDetail.Groupname);
                settitle(res.data.getOneDetail.title);
                setabstract(res.data.getOneDetail.abstract);
                setproblemIdentified(res.data.getOneDetail.problemIdentified);
                setclearyStated(res.data.getOneDetail.clearyStated);
                setreferences(res.data.getOneDetail.references);
                setmodelframework(res.data.getOneDetail.modelframework);
                setMethoDescription(res.data.getOneDetail.MethoDescription);
                setappro(res.data.getOneDetail.appro);
                setdataCollect(res.data.getOneDetail.dataCollect);
                setdataAnalys(res.data.getOneDetail.dataAnalys);
                setconclusionClarity(res.data.getOneDetail.conclusionClarity);
                setrelevent(res.data.getOneDetail.relevent);
                setclearWritten(res.data.getOneDetail.clearWritten);
                setlogic(res.data.getOneDetail.logic);
                setTotal(res.data.getOneDetail.Total);
                
                
               
                
            
         })
            .catch(err => console.log(err));

           


          
          // eslint-disable-next-line react-hooks/exhaustive-deps
          },[]);

    return (
        <div >
        

        <div >
       <div style={{height:'80px', width:'100%', backgroundColor:"#000080", marginTop:'-20px',}}>
               <br/>
               <h2 style={{color:'white', textAlign:'center',}}>Supervisor Evaluation Sheet- Document</h2>
              <br/>
     </div>
           <br/>
           <h1 style={{marginLeft:'400px'}}>{Groupname}</h1>
           <table className='table' style={{border:'1px solid black', width:'50%', marginLeft:'400px'}}>
           
             <tr>
                <th scope='col'><h4>DESCRIPTION</h4></th>
                <th scope='col'><h4>MARKS</h4></th>
             </tr>
             <tr>
               <td style={{fontSize:'20px'}}> <b> Backgroud  </b></td>
             </tr>
             <tr>
               <td>Title</td>
               <td>{title}</td>
             </tr>
             <tr>
               <td>Abstract</td>
               <td>{abstract}</td>
             </tr>
             <tr>
               <td>Problem Identified Clearly</td>
               <td>{problemIdentified}</td>
             </tr>
             <tr>
               <td>Research Area Clearly Stated</td>
               <td>{clearyStated}</td>
             </tr>
             <tr>
             <td style={{fontSize:'20px'}}> <b> Literature Review  </b></td>
             </tr>
             <tr>
               <td>References</td>
               <td>{references}</td>
             </tr>
             <tr>
               <td>Model Framwork</td>
               <td>{modelframework}</td>
             </tr>
             <tr>
             <td style={{fontSize:'20px'}}> <b> Methodology </b></td>
             </tr>
             <tr>
               <td>Description</td>
               <td>{MethoDescription}</td>
             </tr>
             <tr>
               <td>Appropriation</td>
               <td>{appro}</td>
             </tr>
             <tr>
               <td>Data Collection Methods</td>
               <td>{dataCollect}</td>
             </tr>
             <tr>
             <td style={{fontSize:'20px'}}> <b> Result and Analysis Of Findings  </b></td>
             </tr>
             <tr>
               <td>Data Analsing Methods</td>
               <td>{dataAnalys}</td>
             </tr>
             <tr>
             <td style={{fontSize:'20px'}}> <b> Conclusion  </b></td>
             </tr>
             <tr>
               <td>Clear Of Conclusion</td>
               <td>{conclusionClarity}</td>
             </tr>
             <tr>
               <td>Relevent</td>
               <td>{relevent}</td>
             </tr>
             <tr>
             <td style={{fontSize:'20px'}}> <b> Report Writing  </b></td>
             </tr>
             <tr>
               <td>Clearly Writing</td>
               <td>{clearWritten}</td>
             </tr>
             <tr>
               <td>Logical Organized</td>
               <td>{logic}</td>
             </tr>
             <tr>
               <td style={{fontSize:'20px'}}>Total Mark</td>
               <td>{Total}</td>
             </tr>
           </table>

           <button className="btn btn-success" style={{marginLeft:'700px',padding:'10px 10px',backgroundColor:'#3895d3'}}><a href="/supervEveHome"
                style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button>

        </div>
        </div>

    );
  }

