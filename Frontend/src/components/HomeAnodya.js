
import React, { Component } from 'react'
import Homefirst from '../../public/Homefirst.png';


export default class Home extends Component {

 



  render(){
    return (
     <div>
          <div>
            <center>

              <h1 style={{background:'#000080', color:'white',fontSize:'50px'}}> WELCOME TO SLIIT </h1>
              <br></br>  <br></br>

              <button className="btn btn-success" style={{backgroundColor:'#3895d3', width:'180px', height:'50px', fontSize:'20px'}}><a href="/AdminLogin"
                style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white'}}> 
                Admin Login</a></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <button className="btn btn-success" style={{backgroundColor:'#3895d3',width:'180px', height:'50px', fontSize:'20px'}}><a href="/StaffLogin"
                style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white'}}> 
                &nbsp;Staff Login</a></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <button className="btn btn-success" style={{backgroundColor:'#3895d3',width:'180px', height:'50px', fontSize:'20px'}}><a href="/Login"
                style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white'}}> 
               &nbsp;Student Login</a></button>

                     <br></br><br></br>  <br></br><br></br>  <br></br>

            <b><center><h1 style={{fontSize:"50px"}}>RESEARCH MANAGEMENT</h1></center></b>
              <br></br>  <br></br>  
              <div style={{marginLeft:'50px'}}><img src={Homefirst} class="mx-auto" alt="evaluation" width="900" height="300" /></div>
              
              <br></br><br></br>

                      
                      


            </center>
           </div>  

      <div >

        <div >  
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
        <div style={{backgroundColor:"#080523"}}>

            <div id="contact"  style={{backgroundColor:"#080523", color:"white"}}>
           <center><h1> Discover Your Future</h1> </center>

            <div className="row">
          
            <div className="col-md-4" style={{marginLeft:"650px"}}>
                
                <p>Colombo, Sri Lanka</p>
                <p>Phone: +00 1515151515</p>
                <p>Email: SLIIT@mail.com</p>
            </div>
            
            </div>
       
            </div>
        </div>
        </div>
    </div>



   
     
  </div>
    );
  }
}