
import React, { Component } from 'react';
import axios from 'axios';

  export default class CreateTopic extends Component{

    constructor(props){
      super(props);

      this.state={
        Area:"",
        Topic:"",
        Supervisors:"",
        CoSupervisors:"",
        GroupName:"",
        Leader:"",
        SState:"",
        CState:"",
        Comments:""
        
      }
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })


  

  onSubmit=(e)=>{
      e.preventDefault();

      const {Area,Topic,Supervisors,CoSupervisors,GroupName,Leader,SState,CState,Comments} = this.state;

      const data={
        Area:Area,
        Topic:Topic,
        Supervisors:Supervisors,
        CoSupervisors:CoSupervisors,
        GroupName:GroupName,
        Leader:Leader,
        SState:SState,
        CState:CState,
        Comments:Comments
          
      }

      console.log(data)
      axios.post("http://localhost:8000/topic/save",data).then((res) =>{
        if(res.data.success){
          this.setState(
            {
              Area :"",
              Topic:"",
              Supervisors:"",
              CoSupervisors :"",
              GroupName: "",
              Leader:"",
              SState:"",
              CState:"",
              Comments:""
            }
          )
        }
      })
     
  }




    render() {

        return (
            <div className="edit">
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
  
            <div className="col-md-8 mt-4 mx-auto">
            <div style={{height:'80px', width:'100%', backgroundColor:"#080523", marginTop:'-20px'}}>
                    <br/>
                    <h2 style={{color:'white', textAlign:'center'}}>Topic Registration Form</h2>
                   <br/>
          </div>
                <br/>
                <div >
  <p><b>Step 5 - You can now register your selected topic here with the names of the supervisors and co-supervisors you wish to work with for the project. After registering your topic the supervisor responds to your request, so you can proceed with the work.</b></p>
                <form className="row g-3">
  
                    <div className="form-group" >
                        <label for="inputEmail4" className="form-label" >Research Area : </label>
                        <input type="text" className="form-control" name="Area"  value={this.state.Area} placeholder="Please select the research area" onChange={this.handleChange} required></input>
                    </div>
                   
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label" >Research Topic : </label>
                        <input type="text" className="form-control" name="Topic" value={this.state.Topic} placeholder="Enter the selected topic" onChange={this.handleChange} required/>
                    </div>
  <br/>
  
  
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Supervisor : </label>
                        <input type="text" className="form-control" name="Supervisors" value={this.state.Supervisors} placeholder="Enter the name of the selected supervisor" onChange={this.handleChange} required/>
                    </div>
  
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Co-Supervisor :</label>
                        <input type="email" className="form-control" name="CoSupervisors" value={this.state.CoSupervisors} placeholder="Enter the name of the selected co-supervisor" onChange={this.handleChange} required/>
                    </div>
<br/>
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
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Supervisor state : </label>
                        <input type="text" className="form-control" name="SState" value={this.state.SState} list="SStates" placeholder="Select the response as pending until the supervisor confrims" onChange={this.handleChange} />
                    </div>
                    <datalist id="SStates">
                          <option value="Supervisor response - pending"></option>
                

                          </datalist>

                          <div className="form-group">
                        <label for="inputAddress2" className="form-label">Co-Supervisor State : </label>
                        <input type="text" className="form-control" name="CState" value={this.state.CState} list="CStates" placeholder="Select the response as pending until the supervisor confrims" onChange={this.handleChange} />
                    </div>
                    <datalist id="CStates">
                          <option value="Co-Supervisor response - pending"></option>
                    

                          </datalist>
                          
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Registered name of the group :</label>
                        <input type="text" className="form-control" name="GroupName" value={this.state.GroupName} placeholder="Enter the registered name " onChange={this.handleChange} />
                          <div style={{ marginTop:'-20px'}}>
                    <br/>
          </div>
                    </div>
                   
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Enter the details of the Leader : </label>
                        <input type="text" className="form-control" name="Leader" value={this.state.Leader} placeholder="IT number of the leader" onChange={this.handleChange} />
                    </div>

                     
                    
                     
                    

                     
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Comments : </label>
                        <input type="text" className="form-control" name="Comments" value={this.state.Comments} placeholder="Enter the comments to be viewed about topic selection" onChange={this.handleChange} />
                        <p>If no comments, please proceed with a "No"</p>
                    </div>
                    
                </form>
                    <div>
                        <hr/>
                        <center>
                        <button className="btn btn btn-dark btn-lg" onClick={this.onSubmit} href="/">Register Topic</button>&nbsp;
                        </center>
                        <br/>
                        <br/>
                    </div>
  
  
                    </div>
                    
            </div>
            </div>
        )
    }
  }
