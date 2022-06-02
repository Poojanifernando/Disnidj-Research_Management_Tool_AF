
import React, { Component } from 'react'
import axios from 'axios';


export default class AddPresentationPanels extends Component {


    
  constructor(props)
  {
    super(props);
    this.state={
        GroupId: "",
        PanelMember1:"",
        PanelMember2: "",
        PanelMember3:"",
        PanelMember4:""
       
      
    
    }
}

handleInputChange = (e) =>{
     const {name,value} = e.target;
     this.setState({
         ...this.state,
         [name]:value
     })
 }

 onSubmit = (e) =>{
     e.preventDefault();
     const {GroupId,PanelMember1, PanelMember2, PanelMember3, PanelMember4} = this.state;

     const data ={
        GroupId : GroupId,
        PanelMember1 : PanelMember1,
        PanelMember2 : PanelMember2,
        PanelMember3: PanelMember3,
        PanelMember4:PanelMember4,
       
     }
     console.log(data);
   
    
     axios.post(`http://localhost:8000/PresentationPanels/save`,data).then((res)=>{
        console.log(data);
         if(res.data.success){
             this.setState(
                 {
                    GroupId: "",
                    PanelMember1:"",
                    PanelMember2: "",
                    PanelMember3:"",
                    PanelMember4:""
                   
                   
                 }
             )
         }
     })

 }






render(){
    return (
        <div>
        <div>

        <br/>
            <center><h1> PRESENTATION PANEL FORMATION </h1></center> 
        <br/>
          
        <br/>
         
          
       

              
        <center>
        <table width = "950px" height = "500px" style={{margin: "20px"}}>
            <tr>
                <th>
     
                    <form>
      

                        <div className="form-group" style={{marginBottom:'15px'}}>
                                    <label style={{margineBottom:'5px'}}> Student Group ID : </label>
                                    <input type="text"
                                    className="form-control"
                                    name="GroupId"
                                    value={this.state.GroupId}
                                    onChange={this.handleInputChange} 
                                    placeholder="Enter group id"
                            
                                />
                                </div>

           

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>Panel Member 1: </label>
                            <input type="text"
                                className="form-control"
                            name="PanelMember1"
                            value={this.state.PanelMember1}
                            onChange={this.handleInputChange} 
                            placeholder="member 1"
                        
                            />
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>  Panel Member 2: </label>
                            <input type="text"
                            className="form-control"
                            name="PanelMember2"
                            value={this.state.PanelMember2}
                            onChange={this.handleInputChange}
                            placeholder="member 2"
                        
                            />
                        </div>

             

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>Panel Member 3 : </label>
                            <input type="text"
                            className="form-control"
                            name="PanelMember3"
                            value={this.state.PanelMember3}
                            onChange={this.handleInputChange}
                            placeholder="member 3"
                        
                            />
                        </div>
              


                        
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>Panel Member 4: </label>
                            <input type="text"
                            className="form-control"
                            name="PanelMember4"
                            value={this.state.PanelMember4}
                            onChange={this.handleInputChange}
                            placeholder="member 4"
                        
                            />
                        </div>
                 
             
          

               


                        <button className="btn btn-warning" type="submit"style = {{textDecoration:'none',color:'white'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i> Submit </button>&nbsp;

                        <button className="btn btn-warning"><a href = "/ViewPresentation" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>View Panels</a></button>
                        <i className="far fa-check-square"></i>&nbsp;
                        <br/>
                            
                        <div>


                        <br/><br/>
                        </div>
                        
                    </form>
                </th>
             </tr>
        </table>
        </center>


        </div>
        </div>

    );
  }
}