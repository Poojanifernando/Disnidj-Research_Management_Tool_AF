import React, { Component } from  'react';
import axios from 'axios';

export default class ViewPresentation extends Component{
    constructor(props){
      super(props);
    
      this.state= {
        present: []
      };
    }
    
    componentDidMount(){
      this.retrievePresentationPanels();
    }
    
    retrievePresentationPanels(){
      axios.get("http://localhost:8000/PresentationPanels").then(res =>{
        if(res.data.success){
          this.setState({
            present:res.data.existingPresentationPanels
          });
        
          console.log(this.state.present)
        }
      });
    }
    
    
    onDelete = (id) =>{
    
      axios.delete(`http://localhost:8000/PresentationPanels/delete/${id}`).then((res)=>{
          alert("Delete successfully");
          this.retrievePresentationPanels();
            
      })
    }

    filterData(present,searchKey){
      const result = present.filter((present) =>
      present.GroupId.toLowerCase().includes(searchKey)
    
      )
    
      this.setState({present:result})
    }
    
    handleSearchArea = (e) =>{
      const searchKey = e.currentTarget.value;
    
      axios.get("http://localhost:8000/PresentationPanels").then(res=>{
        if(res.data.success){
          this.filterData(res.data.existingPresentationPanels,searchKey)
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
            <center><h1 style={{color:'white', }}>PRESENTATION PANEL FORMATION DETAILS</h1></center> 
            </div></div>
            <br/>

        <hr/>

        <center>
        <div className="col-lg-9 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
           
              placeholder="search by group id"
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
    
              {this.state.present.map((present,index) =>(
                <tr key ={index}>
                  <th scope = "row">{index+1}</th>
                  <td>{present.GroupId}  </td>
                  <td>{present.PanelMember1}</td>
                  <td>{present.PanelMember2}</td>
                  <td>{present.PanelMember3}</td>
                  <td>{present.PanelMember4}</td>
               
                  <td>
    
                    <br/>
                    <a className="btn btn-primary" style = {{textDecoration:'none',color:'white'}}  href={`/Updatepresentation/${present._id}`}>
                                &nbsp;Edit
                                </a>
                                &nbsp;
          
                 
                                &nbsp;
                                <a className="btn btn-primary" style = {{textDecoration:'none',color:'white'}}  href="/" onClick={()=> this.onDelete(present._id)}>
                               &nbsp;Delete
                                </a>

                  
                 
                    
                  </td>
                  
                </tr>
              )
              )}
            </tbody>

           

          
        </table>
        <button className="btn btn-lg btn-primary"><a  href = "/AddPresentationPanels" style = {{textDecoration:'none',color:'white',marginTop:'15px'}} > new Presentation panel</a></button>
        </center>
        <br/>

        </div>
         

       </div>  

        
  

        
        )
    }
    
    }