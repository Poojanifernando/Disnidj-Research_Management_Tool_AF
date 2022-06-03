import React, { Component } from 'react';

import image2 from '../../public/adminhome.jpeg';


export default class A_Home extends Component {
  render() {
    return (
        <div style={{height:'150px', width:'100%', backgroundColor:"#260248", marginTop:'-20px'}}>
        <br/>
        <br/>
        <h1 style={{color:'white', textAlign:'center'}}>Research Topic Management</h1>
        <br/>
        <div className="container" style={{marginLeft:"28%"}}>
            
        </div>
        
        
        <div>

        <nav className="navbar navbar-light navbar-expand-md bg-dark navigation-clean-search">
        <div className="container"><a className="navbar-brand" href="/" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Home</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
        <div className="container"><a className="navbar-brand" href="/view" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Research Groups</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
        <div className="container"><a className="navbar-brand" href="/Areas" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Research Areas and Topics</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
        <div className="container"><a className="navbar-brand" href="/Groupids" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Panel Formations</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
        <div className="container"><a className="navbar-brand" href="/DocumentSubHome" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Documents / Templates Submission</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
        <div className="container"><a className="navbar-brand" href="/Viewallusers" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>All Users</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
    </nav>



          
     
          </div>


    <div class="container-fluid bg-2 text-center">
      <br/>
       
        <div class="row">
      
     
       <center> <img src={image2} class="mx-auto" alt="adminhome" width="1400" height="400"/> </center>
      
     
        </div>
        </div>
          <br/>

        <footer class="page-footer font-small cyan darken-3" style={{backgroundColor:"black", marginTop:"0px",height:"170px", marginBottom:"-40px"}}>

<div>

    <div class="row" style={{marginLeft:"700px",height:"100px"}}>

    <div class="col-md-12 py-5">
        <div class="mb-5 flex-center">

        <a class="fb-ic" style={{paddingLeft:"10px"}}>
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="tw-ic"  style={{paddingLeft:"20px"}}>
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="gplus-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="li-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
    
        <a class="ins-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="pin-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
        </a>
        </div>
    </div>

    </div>

</div>

<div class="footer-copyright text-center py-3" style={{color:"white"}}>© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> Research Topic Mangement tool</a>
</div>

</footer>
          </div>

    )
  }
}
