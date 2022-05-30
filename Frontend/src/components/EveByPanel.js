import React, { Component } from 'react'
import axios from 'axios';
export default class EveByPanel extends Component {
 
 constructor(props){
  super(props) 
  
  this.state={
    Groupname:"",
    introduction:"",
    organization:"",
    voiceInflection:"",
    voiceRate:"",
    tools:"",
    eyeContact:"",
    groupArrange:"",
    Total:""
  }
 }
 handleChange = ({
    target: { value, name }}) => 
    this.setState({ [name]: value


      
     })


onSubmit=(e)=>{
  e.preventDefault();

  const {Groupname,introduction,organization,voiceInflection,voiceRate,tools,eyeContact,groupArrange,Total} = this.state;

  const data={
    Groupname:Groupname,
    introduction:introduction,
    organization:organization,
    voiceInflection:voiceInflection,
    voiceRate:voiceRate,
    tools:tools,
    eyeContact:eyeContact,
    groupArrange:groupArrange,
    Total:Total
      
  }

  console.log(data)


  //save data
  axios.post("http://localhost:8000/PanelEves/savePost",data).then((res) =>{
    if(res.data.success){
      this.setState(
        {
            Groupname:"",
            introduction:"",
            organization:"",
            voiceInflection:"",
            voiceRate:"",
            tools:"",
            eyeContact:"",
            groupArrange:"",
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
               <h2 style={{color:'white', textAlign:'center'}}>Panel Presentaion Evaluation Form</h2>
              <br/>
     </div>
           <br/>
           <div >

              <button className="btn btn-success" style={{marginLeft:'900px', marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
                <a href="/panelEveHome" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
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
                 <h2> Introduction</h2>
                   <label  className="form-label" ><li>Aprropriately introduced himself/ herself, the topic to be presented, and clearly 
                   explained objectives of the presentation</li></label>
                   <input type="text"
                    className="form-control" 
                    name="introduction"  
                    value={this.state.introduction} 
                    placeholder="0" 
                    onChange={this.handleChange} required>
            
                    </input>
               
               </div>
              

               <div className="form-group">
                 <h2>Organization</h2>
                   <label  className="form-label"><li> The presentation is organized in a logical manner</li></label>
                   <input type="text" 
                   className="form-control" 
                   name="organization" 
                   value={this.state.organization} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                    
               
               </div>
              

                
               <div className="form-group">
                 <h2>Voice</h2>
                   <label  className="form-label"><li> Volume and inflection was effective</li> </label>
                   <input type="text" 
                   className="form-control" 
                   name="voiceInflection" 
                   value={this.state.voiceInflection} 
                   placeholder="0" 
                   onChange={this.handleChange} />
               </div>
               
                
               <div className="form-group">
                   <label className="form-label"><li>Rate of speech was appropriate</li> </label>
                   <input type="text" 
                   className="form-control" 
                   name="voiceRate" 
                   value={this.state.voiceRate} 
                   placeholder="0" 
                   onChange={this.handleChange} />
               </div>
               


               <div className="form-group">
               <h2>Tools</h2>
                   <label className="form-label"><li> Audiovisual resources, visual aids, and / or handoutd were used appropriatly
                    (not relied upon)</li></label>
                   <input type="text" 
                   className="form-control" 
                   name="tools" 
                   value={this.state.tools} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                   
               </div>

               <div className="form-group">
                 <h2>Audience Contact / Involvement  </h2>
                   <label  className="form-label"><li> Eye Contact</li></label>
                   <input type="text" 
                   className="form-control" 
                   name="eyeContact" 
                   value={this.state.eyeContact} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                   
               </div>

               <div className="form-group">
                   <label  className="form-label"><li>Arrange inside the group</li></label>
                   <input type="text" 
                   className="form-control" 
                   name="groupArrange" 
                   value={this.state.groupArrange} 
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
