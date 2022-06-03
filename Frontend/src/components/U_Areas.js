import React, { Component } from 'react'
import axios from 'axios';

export default class Areas extends Component {
  constructor(props){
    super(props);

    this.state={
      areas:[]
    };
  }

  componentDidMount(){
    this.retriveAreas();
  }

retriveAreas(){
  axios.get("http://localhost:8000/areas").then(res=>{
    if(res.data.success){
      this.setState({
        areas:res.data.existingAreas
      });
      console.log(this.state.areas)
    }
  });
}




filterData(areas,searchKey){
  const result = areas.filter((area) =>
  area.Area.toLowerCase().includes(searchKey)||
  area.Topics.toLowerCase().includes(searchKey)
  )

  this.setState({areas:result})
}

handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/areas").then(res=>{
    if(res.data.success){
      this.filterData(res.data.existingAreas,searchKey)
    }
  });
}


  render() {
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
  
        <div className='container'>
          <br/>
        
        <p>Research Areas and related Topics</p>

        
        <br/>
            <br/>
          {/* {this.state.travelors.map(travelors=>(
            <div>
                <p>{travelors.Name}</p>
                <p>{travelors.NIC}</p>
                <p>{travelors.Phone}</p>
                <p>{travelors.Email}</p>
                <p>{travelors.type}</p>
                <p>{travelors.date}</p>
              </div>
          ))} */}
          <br/>
           <div className="col-lg-9 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
              placeholder="Search for research areas and find topics"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
      <table className='table'>

          <thead>
          <tr>
          <th scope='col'>No.</th>
          <th scope='col'>Research Area</th>
          <th scope='col'>Topics</th>
       
          

          </tr>

          </thead>
          <tbody>

          {this.state.areas.map((areas,index)=>(
            <tr>
              <th scope='row'>{index+1}</th>
              <td>{areas.Area}</td>
              <td>{areas.Topics}</td>
           
              <td>
             

              </td>


            </tr>
          ))}

          </tbody>

          

      </table>
      </div>

      
      </div>
    )
  }
}
