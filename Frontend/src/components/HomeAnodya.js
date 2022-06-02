
import React, { Component } from 'react'


export default class Home extends Component {

 



  render(){
    return (
    






      <div>
      <center>

        <h1> Home </h1>


                 <button className="btn btn-warning"><a href = "/Registration" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>registration</a></button>
                 <i className="far fa-check-square"></i>&nbsp;
<br/><br/>

                 <button className="btn btn-warning"><a href = "/AddTopisPanels" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>Topic panel</a></button>
                 <i className="far fa-check-square"></i>&nbsp;

                 <button className="btn btn-warning"><a href = "/AddPresentationPanels" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>Presentation panel</a></button>
                 <i className="far fa-check-square"></i>&nbsp;
                  

                  
                 <button className="btn btn-warning"><a href = "/AddThesisPanels" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>Thesis panel</a></button>
                 <i className="far fa-check-square"></i>&nbsp;
                  

                 <button className="btn btn-warning"><a href = "/Groupids" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>groups</a></button>
                 <i className="far fa-check-square"></i>&nbsp;

                 <button className="btn btn-warning"><a href = "/AdminLogin" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>Admin Login</a></button>
                 <i className="far fa-check-square"></i>&nbsp;


                 <button className="btn btn-warning"><a href = "/StaffLogin" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>staff Login</a></button>
                 <i className="far fa-check-square"></i>&nbsp;

                 <button className="btn btn-warning"><a href = "/Viewallusers" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>view all users</a></button>
                 <i className="far fa-check-square"></i>&nbsp;
                 <br/>
 
 <h4>student side panel members </h4>

                 <button className="btn btn-warning"><a href = "/S_ViewTopis" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>view topic panel-stu side</a></button>
                 <i className="far fa-check-square"></i>&nbsp;

                 <button className="btn btn-warning"><a href = "/S_ViewPresentation" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>view presenatation panel-stu side</a></button>
                 <i className="far fa-check-square"></i>&nbsp;

         <button className="btn btn-warning"><a href = "/S_ViewThesis" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>view thesis panel-stu side</a></button>
                 <i className="far fa-check-square"></i>&nbsp;
                 
   </center>    
      </div>
    );
  }
}