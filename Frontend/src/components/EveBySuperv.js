import React, { Component } from 'react'
import axios from 'axios';
export default class EveBySuperv extends Component {
 
 constructor(props){
  super(props) 
  
  this.state={
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
  }
 }
 handleChange = ({
    target: { value, name }}) => 
    this.setState({ [name]: value


      
     })


onSubmit=(e)=>{
  e.preventDefault();

  const {Groupname,title,abstract,problemIdentified,clearyStated,references,modelframework,
     MethoDescription,appro,dataCollect,dataAnalys,conclusionClarity,relevent,clearWritten,logic,Total} = this.state;

  const data={
    Groupname:Groupname,
    title:title,
    abstract:abstract,
    problemIdentified: problemIdentified,
    clearyStated:clearyStated,
    references: references,
    modelframework:modelframework,
    MethoDescription:MethoDescription,
    appro:appro,
    dataCollect:dataCollect,
    dataAnalys:dataAnalys,
    conclusionClarity:conclusionClarity,
    relevent:relevent,
    clearWritten:clearWritten,
    logic:logic,
    Total:Total
      
  }

  console.log(data)


  //save data
  axios.post("http://localhost:8000/SuperviEve/savePost",data).then((res) =>{
    if(res.data.success){
      this.setState(
        {
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

        }
      )
      alert("You are saving the details");
    } 
  })
 
}
 
 
 
 
  render() {
    return (
      

<div className="edit">
       
       <div className="col-md-8 mt-4 mx-auto">
       <div style={{height:'80px', width:'100%', backgroundColor:"#000080", marginTop:'-20px'}}>
               <br/>
               <h2 style={{color:'white', textAlign:'center'}}>Supervisor Evaluation Form- Document</h2>
              <br/>
     </div>
           <br/>
           <div >

              <button className="btn btn-success" style={{marginLeft:'900px', marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
                <a href="/supervEveHome" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                    <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                </button>

                <br></br><br></br>
           
           <form className="row g-3" style={{backgroundColor:"#ebecf0"}}>

           <div className="form-group" >
                 
                   <label  className="form-label" >Group Name : </label>
                   <input type="text" 
                   className="form-control" 
                   name="Groupname"  
                   value={this.state.Groupname} 
                   placeholder="0" 
                   onChange={this.handleChange} required>

                   </input>
               
               </div>

               <div className="form-group" >
                 <h2> Backgroud</h2>
                   <label  className="form-label" >Title : </label>
                   <input type="text"
                    className="form-control" 
                    name="title"  
                    value={this.state.title} 
                    placeholder="0" 
                    onChange={this.handleChange} required>
            
                    </input>
               
               </div>
              
               <div className="form-group">
                   <label  className="form-label" >Abstract : </label>
                   <input type="text" 
                   className="form-control" 
                   name="abstract"
                  value={this.state.abstract} 
                  placeholder="0" 
                  onChange={this.handleChange} required/>
               </div>


               <div className="form-group">
                   <label  className="form-label">Problem Identified Clearly : </label>
                   <input type="text" 
                   className="form-control" 
                   name="problemIdentified" 
                   value={this.state.problemIdentified} 
                   placeholder="0" 
                   onChange={this.handleChange} required/>
               </div>

               <div className="form-group">
                   <label  className="form-label">Research Area Clearly Stated :</label>
                   <input type="email" 
                   className="form-control" 
                   name="clearyStated" 
                   value={this.state.clearyStated} 
                   placeholder="0" 
                   onChange={this.handleChange} required/>
               </div>

               <div className="form-group">
                 <h2>Literature Review</h2>
                   <label  className="form-label">References :</label>
                   <input type="text" 
                   className="form-control" 
                   name="references" 
                   value={this.state.references} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                    
               
               </div>
              
               <div className="form-group">
                   <label  className="form-label">Model Framwork : </label>
                   <input type="text" 
                   className="form-control" 
                   name="modelframework" 
                   value={this.state.modelframework} 
                   placeholder="0" 
                   onChange={this.handleChange} />
               </div>

                
               <div className="form-group">
                 <h2>Methodology</h2>
                   <label  className="form-label">Description : </label>
                   <input type="text" 
                   className="form-control" 
                   name="MethoDescription" 
                   value={this.state.MethoDescription} 
                   placeholder="0" 
                   onChange={this.handleChange} />
               </div>
               
                
               <div className="form-group">
                   <label className="form-label">Appropriation : </label>
                   <input type="text" 
                   className="form-control" 
                   name="appro" 
                   value={this.state.appro} 
                   placeholder="0" 
                   onChange={this.handleChange} />
               </div>
               

                
               <div className="form-group">
                   <label  className="form-label">Data Collection Methods : </label>
                   <input type="text" 
                   className="form-control" 
                   name="dataCollect" 
                   value={this.state.dataCollect} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                   
               </div>

               <div className="form-group">
               <h2>Result and Analysis of the Findings</h2>
                   <label className="form-label">Data Analsing Methods : </label>
                   <input type="text" 
                   className="form-control" 
                   name="dataAnalys" 
                   value={this.state.dataAnalys} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                   
               </div>

               <div className="form-group">
                 <h2>Conclusion </h2>
                   <label  className="form-label">Clearity of Conclusion : </label>
                   <input type="text" 
                   className="form-control" 
                   name="conclusionClarity" 
                   value={this.state.conclusionClarity} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                   
               </div>

               <div className="form-group">
                   <label  className="form-label">Relevent : </label>
                   <input type="text" 
                   className="form-control" 
                   name="relevent" 
                   value={this.state.relevent} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                   
               </div>

               <div className="form-group">
                 <h2>Report Writing</h2>
                   <label  className="form-label">Clearly Written : </label>
                   <input type="text" 
                   className="form-control" 
                   name="clearWritten" 
                   value={this.state.clearWritten} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                   
               </div>

               <div className="form-group">
                   <label  className="form-label">Logical Organized : </label>
                   <input type="text" 
                   className="form-control" 
                   name="logic" 
                   value={this.state.logic} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                   
               </div>

               <div className="form-group">
                 <h2></h2>
                   <label  className="form-label">Total Mark : </label>
                   <input type="text" 
                   className="form-control" 
                   name="Total" 
                   value={this.state.Total} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                   
               </div>
               
           </form>
               <div>
                   <hr/>
                   <center>
                   <button className="btn btn btn-dark btn-lg" style={{backgroundColor:"#0147ab"}} onClick={this.onSubmit} href="/"> Submit the Result</button>&nbsp;

                  
                  
                   </center>
                
                   

               
               </div>


               </div>
               
       </div>
       </div>





    )
  }
}
