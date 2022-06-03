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
  topic.GroupName.toLowerCase().includes(searchKey)
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
          

            </div>
  
        <div className='container'>
          <br/>
        
          <div style={{height:'80px', width:'100%', backgroundColor:"#080523", marginTop:'-20px'}}>
                    <br/>
                    <h2 style={{color:'white', textAlign:'center'}}>Responses of the Supervisors</h2>
                   <br/>
          </div>

        
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
              placeholder="search by group name"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
      <table className='table'>

          <thead>
          <tr>
          <th scope='col'>No.</th>
          <th scope='col'>GroupName</th> 
          <th scope='col'>Project Topic</th>
          <th scope='col'>Selected Supervisor</th>
          <th scope='col'>Supervisor Response</th>
          <th scope='col'>Selected Co-Supervisor</th>
          <th scope='col'>Co-Supervisor Response</th>
          <th scope='col'>Change Supervisors if rejected</th>
       

          </tr>

          </thead>
          <tbody>

          {this.state.topics.map((topics,index)=>(
            <tr>
              <th scope='row'>{index+1}</th>
              <td>{topics.GroupName}</td>
              <td>{topics.Topic}</td>
              <td>{topics.Supervisors}</td>
              <td>{topics.SState}</td>
              <td>{topics.CoSupervisors}</td>
              <td>{topics.CState}</td>
              
              <td>

            <a className = "btn btn btn-outline-dark" href={`/Change/${topics._id}`} style={{textDecoration:'none'}}>
                <i className ="fas fa-edit"></i>&nbsp;Request another supervisor
            </a>
            &nbsp;
          
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
