import React, { Component } from 'react';
import axios from 'axios';

  export default class SubmitThesis extends Component{

    constructor(props){
      super(props);

      this.state={
        thesis:""        
      };
    }
    

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  onSubmit=(e)=>{
    e.preventDefault();

    const {thesis} = this.state;

    const data={
        thesis : thesis
        
    }

    console.log(data)
    axios.post("http://localhost:8000/thesis/save", data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            thesis: ""
         
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
                  
                    <li className="nav-item"><a className="nav-link" href="/topicReg" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Topic Registration</a></li>
                    <li className="nav-item"><a className="nav-link" href="/ViewAreas" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Research Areas and Topics</a></li>
                   
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Panel Evaluations</a></li>
                    
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Documents and templates</a></li>
                    
                    <li className="nav-item"><a className="nav-link" href="/SubmitThesis" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Thesis Submission page</a></li>                  
                    
                    <li><a className="btn btn-warning"  href="/" style={{height:"40px",width:"100px", marginTop:"8px", marginLeft:"900px"}}>Log Out</a></li>
                   
                  
                </ul>
                
                
            </div>
        </div>
    </nav>
            </div>
  
            <div className="col-md-8 mt-4 mx-auto">
            <div style={{height:'80px', width:'100%', backgroundColor:"#080523", marginTop:'-20px'}}>
                    <br/>
                    <h2 style={{color:'white', textAlign:'center'}}>Thesis Submission</h2>
                   <br/>
          </div>
                <br/>
                <div >
  
                <form className="row g-3">                  
                    <div className="form-group">
                        <label className="form-label" >Add your thesis</label>
                        <input type="text" className="form-control" name="thesis" value={this.state.thesis} placeholder="type something...." onChange={this.handleChange} required/>
                    </div>
                </form>
    
                    <div>
                        <hr/>
                        <center>
                        <button className="btn btn btn-dark btn-lg" onClick={this.onSubmit}>Save</button>&nbsp;
                        </center>
                        <br/>
                        <br/>
                    </div>
                    </div>

                    <div>
                        <hr/>
                        <center>
                        <a href="/Thesis">View thesis</a>
                        </center>
                        <br/>
                        <br/>
                    </div>
            </div>
            </div>
        )
    }
  }
;