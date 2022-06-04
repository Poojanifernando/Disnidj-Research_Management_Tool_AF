import React, { Component } from  'react';
import axios from 'axios';

export default class Thesis extends Component{
    constructor(props){
      super(props);
    
      this.state= {
        thesis: []
      };
    }
    
    componentDidMount(){
      this.retrieveThesis();
    }
    
    retrieveThesis(){
      axios.get("http://localhost:8000/thesis").then(res =>{
        if(res.data.success){
          this.setState({
            thesis:res.data.existingThesis
          });
        
          console.log(this.state.thesis)
        }
      });
    }
    
    
    onDelete = (id) =>{
    
      axios.delete(`http://localhost:8000/thesis/delete/${id}`).then((res)=>{
          alert("Delete successfully");
          this.retrieveThesis();
            
      })
    }
    
    //to serch specific data
    filterData(thesis,searchKey){
      const result = thesis.filter((thesis) =>
      thesis.GroupId.toLowerCase().includes(searchKey)
    
      )
    
      this.setState({thesis:result})
    }
    
    handleSearchArea = (e) =>{
      const searchKey = e.currentTarget.value;
    
      axios.get("http://localhost:8000/thesis").then(res=>{
        if(res.data.success){
          this.filterData(res.data.existingThesis,searchKey)
        }
      });
    }

    
  
      render(){
        return (
        <div>
        <div>
        <br/>
            <div className="col-md-8 mt-4 mx-auto">
            <div style={{height:'80px', width:'100%', backgroundColor:"#000080", marginTop:'-20px'}}>
            <center><h1 style={{color:'white', }}>THESIS SUBMISSION PAGE</h1></center> 
            </div></div>
            <br/>

        <hr/>

        <center>
        <div className="col-lg-9 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
           
              placeholder="search group id"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
            </center>
        
       
            <br/>
            <center>
            <table className = "table">
                <thead>
                    <tr>
                    <th scope = "col">Thesis</th>
                   
                    </tr>
                </thead>
                <tbody>
    
              {this.state.thesis.map((thesis,index) =>(
                <tr key ={index}>
                  <th scope = "row">{index+1}</th>
                  <td>{thesis.thesis}</td>
               
                  <td>
    
                    <br/>
       
                 
                                &nbsp;
                                <a className="btn btn-primary" style = {{textDecoration:'none',color:'white'}}  href="/" onClick={()=> this.onDelete(thesis._id)}>
                               &nbsp;Delete
                                </a>

                  
                 
                    
                  </td>
                  
                </tr>
              )
              )}
            </tbody>

           

          
        </table>

        </center>
        <br/>

        </div>
         

       </div>  

        
  

        
        )
    }
    
    }