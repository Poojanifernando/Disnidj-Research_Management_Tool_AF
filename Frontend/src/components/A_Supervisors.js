import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      topics:[]
    };
  }

  componentDidMount(){
    this.retriveTopics();
  }

retriveTopics(){
  axios.get("http://localhost:8000/topics").then(res=>{
    if(res.data.success){
      this.setState({
        topics:res.data.existingTopics
      });
      console.log(this.state.topics)
    }
  });
}




filterData(topics,searchKey){
  const result = topics.filter((topic) =>
  topic.Supervisors.toLowerCase().includes(searchKey)||
  topic.CoSupervisors.toLowerCase().includes(searchKey)
  )

  this.setState({topics:result})
}

handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/topics").then(res=>{
    if(res.data.success){
      this.filterData(res.data.existingTopics,searchKey)
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
  
        <div className='container'>
          <br/>
        
        <p>Supervisor Selections</p>

        
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
              placeholder="search fby your name"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
      <table className='table'>

          <thead>
          <tr>
          <th scope='col'>No.</th>
          <th scope='col'>Project Topic</th>
          <th scope='col'>Selected Supervisor</th>
          <th scope='col'>Selected Co-Supervisor</th>
          <th scope='col'>GroupName</th>


          

          </tr>

          </thead>
          <tbody>

          {this.state.topics.map((topics,index)=>(
            <tr>
              <th scope='row'>{index+1}</th>
              <td><a href={`/Response/${topics._id}`} style={{textDecoration:'none'}}>{topics.Topic}</a></td>
              <td>{topics.Supervisors}</td>
              <td>{topics.CoSupervisors}</td>
              <td>{topics.GroupName}</td>
         
             



            </tr>
          ))}

          </tbody>

          

      </table>
      </div>

      
      </div>
    )
  }
}
