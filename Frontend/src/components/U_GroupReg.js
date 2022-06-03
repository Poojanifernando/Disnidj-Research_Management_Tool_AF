
import React, { Component } from 'react';
import axios from 'axios';
import reg from '../../public/register.jpg';

  export default class CreateGroup extends Component{

    constructor(props){
      super(props);

      this.state={
        GName:"",
        student1:"",
        student2:"",
        student3:"",
        student4:"",
        Leader:""
        
      }
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })


  

  onSubmit=(e)=>{
      e.preventDefault();

      const {GName,student1,student2,student3,student4,Leader} = this.state;

      const data={
          GName:GName,
          student1:student1,
          student2:student2,
          student3:student3,
          student4:student4,
          Leader:Leader
          
      }

      console.log(data)
      axios.post("http://localhost:8000/group/save",data).then((res) =>{
        if(res.data.success){
          this.setState(
            {
              GName :"",
              student1:"",
              student2:"",
              student3 :"",
              student4: "",
              Leader:""
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
        <div style={{height:'150px', width:'100%', backgroundColor:"#080523", marginTop:'-20px'}}>
                <br/>
                <h2 style={{color:'white', textAlign:'center'}}> <img src={reg} class="mx-auto" alt="" width="100" height="100"/>Group Registration Form</h2>
               <br/>
      </div>
            <br/>

<p><b>Step 1 : Form a group with four members and register your group here with a group name and with the credentials of the group leader. Once you register your group you are able to start with your research project work.</b></p>
            <div >

            <form className="row g-3">

                <div className="form-group" >
                    <label for="inputEmail4" className="form-label" >Enter a name for the group : </label>
                    <input type="text" className="form-control" name="GName"  value={this.state.GName} placeholder="Create a name for the group" onChange={this.handleChange} required></input>
                </div>
               
                <div className="form-group">
                    <label for="inputAddress2" className="form-label" >Enter the name of Student 1 : </label>
                    <input type="text" className="form-control" name="student1" value={this.state.student1} placeholder="Member 1" onChange={this.handleChange} required/>
                </div>


                <div className="form-group">
                    <label for="inputAddress2" className="form-label">Enter the name of Student 2 : </label>
                    <input type="text" className="form-control" name="student2" value={this.state.student2} placeholder="Member 2" onChange={this.handleChange} required/>
                </div>

                <div className="form-group">
                    <label for="inputAddress2" className="form-label">Enter the name of Student 3 </label>
                    <input type="email" className="form-control" name="student3" value={this.state.student3} placeholder="Member 3" onChange={this.handleChange} required/>
                </div>

                <div className="form-group">
                    <label for="inputAddress2" className="form-label">Enter the name of Student 4</label>
                    <input type="text" className="form-control" name="student4" value={this.state.student4} placeholder="Member 4" onChange={this.handleChange} />
                      <div style={{ marginTop:'-20px'}}>
                <br/>
      </div>
                </div>
               
                <div className="form-group">
                    <label for="inputAddress2" className="form-label">Enter the details of the Leader : </label>
                    <input type="text" className="form-control" name="Leader" value={this.state.Leader} placeholder="IT number of the leader" onChange={this.handleChange} />
                </div>
            </form>
                <div>
                    <hr/>
                    <center>
                    <button className="btn btn btn-dark btn-lg" onClick={this.onSubmit} href="/">Submit</button>&nbsp;
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
