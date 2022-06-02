import React, { Component } from  'react';
import axios from 'axios';

export default class ViewThesis extends Component{
    constructor(props){
      super(props);
    
      this.state= {
        thesis: []
      };
    }
    
    componentDidMount(){
      this.retrieveThesisPanels();
    }
    
    retrieveThesisPanels(){
      axios.get("http://localhost:8000/ThesisPanels").then(res =>{
        if(res.data.success){
          this.setState({
            thesis:res.data.existingThesisPanels
          });
        
          console.log(this.state.thesis)
        }
      });
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
    
      axios.get("http://localhost:8000/ThesisPanels").then(res=>{
        if(res.data.success){
          this.filterData(res.data.existingThesisPanels,searchKey)
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
            <center><h1 style={{color:'white', }}>THESIS PANEL  DETAILS</h1></center> 
            </div></div>
            <br/>

        <hr/>

        <center>
        <div className="col-lg-9 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
           
              placeholder="search group id to find your panel"
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
                    <th scope = "col">id</th>
                    <th scope = "col">Group ID</th>
                    <th scope = "col">Member 1</th>
                    <th scope = "col">Member 2</th>
                    <th scope = "col">Member 3</th>
                    <th scope = "col">Member 4</th>
                   
                    </tr>
                </thead>
                <tbody>
    
              {this.state.thesis.map((thesis,index) =>(
                <tr key ={index}>
                  <th scope = "row">{index+1}</th>
                  <td>{thesis.GroupId}  </td>
                  <td>{thesis.PanelMember1}</td>
                  <td>{thesis.PanelMember2}</td>
                  <td>{thesis.PanelMember3}</td>
                  <td>{thesis.PanelMember4}</td>
               
                  <td>
    
                    <br/>
                  
                  
                 
                    
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