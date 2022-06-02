import React, { Component } from  'react';
import axios from 'axios';

export default class ViewTopis extends Component{
    constructor(props){
      super(props);
    
      this.state= {
        topic: []
      };
    }
    
    componentDidMount(){
      this.retrieveTopicpanel();
    }
    
    retrieveTopicpanel(){
      axios.get("http://localhost:8000/TopicPanels").then(res =>{
        if(res.data.success){
          this.setState({
            topic:res.data.existingTopicPanels
          });
        
          console.log(this.state.topic)
        }
      });
    }
    
    

    
//to serch specific data
    filterData(topic,searchKey){
      const result = topic.filter((topic) =>
      topic.GroupId.toLowerCase().includes(searchKey)
    
      )
    
      this.setState({topic:result})
    }
    
    handleSearchArea = (e) =>{
      const searchKey = e.currentTarget.value;
    
      axios.get("http://localhost:8000/TopicPanels").then(res=>{
        if(res.data.success){
          this.filterData(res.data.existingTopicPanels,searchKey)
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
            <center><h1 style={{color:'white', }}>TOPIC PANEL DETAILS</h1></center> 
            </div></div>
            <br/>

        <hr/>
        <center>
        <div className="col-lg-9 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
           
              placeholder="search group id and find your panel"
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
    
              {this.state.topic.map((topic,index) =>(
                <tr key ={index}>
                  <th scope = "row">{index+1}</th>
                  <td>{topic.GroupId}  </td>
                  <td>{topic.PanelMember1}</td>
                  <td>{topic.PanelMember2}</td>
                  <td>{topic.PanelMember3}</td>
                  <td>{topic.PanelMember4}</td>
               
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