
import React, { Component } from 'react';
import axios from 'axios';

  export default class CreateArea extends Component{

    constructor(props){
      super(props);

      this.state={
        Area:"",
        Topics:""
      }

      this.state={
        areas:[]
      };
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
                    <h2 style={{color:'white', textAlign:'center'}}>Add new Topics </h2>
                   <br/>
          </div>
                <br/>


                <div >
  
                <form className="form-inline">
                
                    <div className="form-group" >
                        <label for="inputEmail4" className="form-label" >Area of Research : </label>
                        <input type="text" className="form-control" name="Area"  value={this.state.Area} placeholder="Enter the research area" onChange={this.handleChange} required></input>
                    </div>
                   
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label" >Topics related to the Area : </label>
                        <input type="textArea" className="form-control" name="Topics" value={this.state.Topics} placeholder="Please enter all the related topics" onChange={this.handleChange} required/>
                    </div>
  
  
                </form>
                    <div>
                        <hr/>
                        <center>
                        <button className="btn btn btn-dark btn-lg" onClick={this.onSubmit} href="/">Add Details</button>&nbsp;
                        <button className="btn btn btn-succes" href="/">Back</button>&nbsp;
                        </center>
                        <br/>
                        <br/>
                    </div>
  
  
                    </div>

                    <div className='container'>
          <br/>
          <div style={{height:'80px', width:'100%', backgroundColor:"#080523", marginTop:'-20px'}}>
                    <br/>
                    <h2 style={{color:'white', textAlign:'center'}}>Research areas and topics </h2>
                   <br/>
          </div>
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
            </div>
        )
    }
  }
