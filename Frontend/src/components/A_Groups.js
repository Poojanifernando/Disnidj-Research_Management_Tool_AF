import React, { Component } from 'react'
import axios from 'axios';

export default class Groups extends Component {
  constructor(props){
    super(props);

    this.state={
      groups:[]
    };
  }

  componentDidMount(){
    this.retriveGroups();
  }

retriveGroups(){
  axios.get("http://localhost:8000/groups").then(res=>{
    if(res.data.success){
      this.setState({
        groups:res.data.existingGroups
      });
      console.log(this.state.groups)
    }
  });
}




filterData(groups,searchKey){
  const result = groups.filter((group) =>
  group.GName.toLowerCase().includes(searchKey)||
  group.Leader.toLowerCase().includes(searchKey)
  )

  this.setState({groups:result})
}

handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/groups").then(res=>{
    if(res.data.success){
      this.filterData(res.data.existingGroups,searchKey)
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
        
        <p>Registered Groups</p>

        
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
              placeholder="search for groups by name"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
      <table className='table'>

          <thead>
          <tr>
          <th scope='col'>No.</th>
          <th scope='col'>Name of the group</th>
          <th scope='col'>Student 1</th>
          <th scope='col'>Student 2</th>
          <th scope='col'>Student 3</th>
          <th scope='col'>Student 4</th>
          <th scope='col'>Group Leader</th>
          

          </tr>

          </thead>
          <tbody>

          {this.state.groups.map((groups,index)=>(
            <tr>
              <th scope='row'>{index+1}</th>
              <td>{groups.GName}</td>
              <td>{groups.student1}</td>
              <td>{groups.student2}</td>
              <td>{groups.student3}</td>
              <td>{groups.student4}</td>
              <td>{groups.Leader}</td>
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
