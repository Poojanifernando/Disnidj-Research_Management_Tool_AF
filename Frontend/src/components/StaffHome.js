import React, { Component } from 'react'
import Hometopic from '../../public/topic.png'; 
import Homepresentation from '../../public/presentation.jpg';  
import Homethesis from '../../public/thesis.jpg';
import Homedocument from '../../public/document.jpg';  
import Homecommunication from '../../public/communication.jpeg';  
import Homemarking from '../../public/marking.jpeg';  

export default class StaffHome extends Component {
    render() {
        return (
           <div>
               
     
        <nav className="navbar navbar-light navbar-expand-md bg-dark navigation-clean-search">
        <div className="container"><a className="navbar-brand" href="/" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Home</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
        <div className="container"><a className="navbar-brand" href="/S_ViewTopis" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Topic Panel</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
        <div className="container"><a className="navbar-brand" href="/S_ViewThesis" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Thesis Panel</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
        <div className="container"><a className="navbar-brand" href="/S_ViewPresentation" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Presentation Panel</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
        <div className="container"><a className="navbar-brand" href="/EveHome" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Evaluations</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
        <div className="container"><a className="navbar-brand" href="/Supervisors" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Topic Evaluation</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
        <div className="container"><a className="navbar-brand" href="#" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Group Chat </a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
       
           
           
           
           
            <div className="collapse navbar-collapse" id="navcol-1">
                <a className="btn btn-light action-button" role="button" href="#" style={{fontsize:'15px', background: 'rgb(69,27,158)' ,color: 'rgb(255,255,255)', marginLeft:'30px'}}>Logout</a>
            </div>
        
    </nav>
    
   
   
 <center>
 <h1 style={{background:'#000080', color:'white',fontSize:'50px'}}> WELCOME TO RESRAECH PROJECT MANAGEMENT SYSTEM </h1>
    


                <div style={{backgroundColor:"white"}}>
                <div id="band" className="container text-center" style={{backgroundColor:"white"}}>
             
                <br/>
                <div className="row">
                <div className="col-sm-4">
                <p className="text-center"><strong>Topic Evaluation</strong></p>
                <a href="#demo" data-toggle="collapse">
                <img src={Hometopic} className="img-circle person" alt="topic" width="300"  height="300" />
                       
                </a>
                <br/><br/><br/>
                </div>


                <div className="col-sm-4">
                <p className="text-center"><strong>Presentation Evaluation</strong></p><br/>
                <a href="#demo2" data-toggle="collapse">
                <img src={Homepresentation} className="img-circle person" alt="presentation" width="300"  height="300" />
                </a>
                <br/><br/>
                </div>

                <div className="col-sm-4">
                <p className="text-center"><strong>Final Thesis Evaluation</strong></p><br/>
                <a href="#demo3" data-toggle="collapse">
                <img src={Homethesis} className="img-circle person" alt="thesis" width="300"  height="300" />
                </a>
                <br/><br/><br/>
                </div>
                </div>

                <div className="row">
                <div className="col-sm-4">
                <p className="text-center"><strong>Document Evaluation</strong></p><br/>
                <a href="#demo3" data-toggle="collapse">
                <img src={Homedocument} className="img-circle person" alt="document" width="300"  height="300" />
                </a>
                <br/><br/><br/>
                </div>

                <div className="col-sm-4">
                <p className="text-center"><strong>Group Communication</strong></p><br/>
                <a href="#demo2" data-toggle="collapse">
                <img src={Homecommunication} className="img-circle person" alt="communication" width="300"  height="300" />
                </a>
                <br/><br/>

                </div>

                
                <div className="col-sm-4">
                <p className="text-center"><strong> Marking scheme</strong></p><br/>
                <a href="#demo2" data-toggle="collapse">
                <img src={Homemarking} className="img-circle person" alt="marking" width="300"  height="300" />
                </a>
                <br/><br/>
                </div>
                </div>
                
                </div>
                
                </div>


</center>


<div>

<div>  

<div style={{backgroundColor:"#080523"}}>

    <div id="contact"  style={{backgroundColor:"#080523", color:"white"}}>
     <center><h4> Discover Your Future</h4> </center>

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
        )
    }
}


