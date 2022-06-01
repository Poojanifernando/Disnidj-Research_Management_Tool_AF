
import React, { Component } from 'react';
import axios from 'axios';

  export default class addArea extends Component{

    constructor(props){
      super(props);

      this.state={
        Area:"",
        Topics:""
    
      }
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })


  

  onSubmit=(e)=>{
      e.preventDefault();

      const {Area, Topics} = this.state;

      const data={
          Area:Area,
          Topics:Topics
          
      }

      console.log(data)
      axios.post("http://localhost:8000/area/save",data).then((res) =>{
        if(res.data.success){
          this.setState(
            {
              Area :"",
              Topics:""
           
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
                    <li className="nav-item"><a className="nav-link "href="/view" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Research Groups</a></li>
                  
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Supervisor allocations</a></li>
                    <li className="nav-item"><a className="nav-link" href="/Areas" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Research Areas and Topics</a></li>
                   
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Panel Formations</a></li>
                    
                    <li className="nav-item"><a className="nav-link" href="#" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Project Evaluations</a></li>
                    
                  
                    
                    <li><a className="btn btn-warning"  href="/" style={{height:"40px",width:"100px", marginTop:"8px", marginLeft:"900px"}}>Log Out</a></li>
                   
                  
                </ul>
                
                
            </div>
        </div>
    </nav>
            </div>
       
            <div className="col-md-8 mt-4 mx-auto">
            <div style={{height:'80px', width:'100%', backgroundColor:"#080523", marginTop:'-20px'}}>
                    <br/>
                    <h2 style={{color:'white', textAlign:'center'}}>Research Areas and Topics</h2>
                   <br/>
          </div>
                <br/>


                <div >
  
                <form className="row g-3">
  
                    <div className="form-group" >
                        <label for="inputEmail4" className="form-label" >Research Area : </label>
                        <input type="text" className="form-control" name="Area"  value={this.state.Area} placeholder="Enter the area of the topic" onChange={this.handleChange} required></input>
                    </div>
                   
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label" >Related Research Topics : </label>
                        <input type="textArea" className="form-control" name="Topics" value={this.state.Topics} placeholder="Add related topics" onChange={this.handleChange} required/>
                    </div>

  
                </form>
                    <div>
                        <hr/>
                        <center>
                        <button className="btn btn btn-dark btn-lg" onClick={this.onSubmit} href="/">Save Research Area</button>&nbsp;
                        <button type="button"> <a href={'/groups'}>Click here to view all Groups </a></button>
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
