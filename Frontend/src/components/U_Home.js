import React, { Component } from 'react';
import image from '../../public/11.jpg';
import image2 from '../../public/2.jpg';
import image3 from '../../public/3.jpg';
import image4 from '../../public/main.webp';

export default class U_Home extends Component {
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
        <div><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link "href="/groupreg" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Group Registration</a></li>
                  
                    <li className="nav-item"><a className="nav-link" href="/groups" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Registered Groups</a></li>
                    <li className="nav-item"><a className="nav-link" href="/ViewAreas" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Research Areas and Topics</a></li>
                   
                    <li className="nav-item"><a className="nav-link" href="/Confirm" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Supervisor Allocations</a></li>
                    <li className="nav-item"><a className="nav-link" href="/EvaluationResult" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Panel Evaluations Results</a></li>
                    
                    <li className="nav-item"><a className="nav-link" href="/STDdownloads" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Documents and templates</a></li>
                    
                    <li className="nav-item"><a className="nav-link" href="/SubmitNavbar" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Documents Submission page</a></li>
                    
                  
                    
                    <li><a className="btn btn-warning"  href="/" style={{height:"40px",width:"100px", marginTop:"8px", marginLeft:"800px"}}>Log Out</a></li>
                   
                  
                </ul>
                
                
            </div>
        </div>
    </nav>
          </div>


    <div class="container-fluid bg-3 text-center">
      <br/>
      
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active">
       <img class="d-block w-100" src={image4} alt="First slide" width="80%" height="500"/>
      </div>

    </div>
    <h3><b>Benefits of this tool?</b></h3>
    </div>
        <div class="row">
        <div class="col-sm-4">
        <p>You are given the opportunity to form your research groups and register your group via Group Registration option provided by the tool.</p>
        <img src={image} class="mx-auto" alt="" width="250" height="250"/>
        </div>
        <div class="col-sm-4">
        <p>Select a research topic from a particular research area and start working on with it, with the guidance of supervisors and co-supervisors.</p>
        <img src={image2} class="mx-auto" alt="" width="250" height="250"/>
        </div>
        <div class="col-sm-4">
        <p>After doing the submissions, you are given the opportunity to get feedback on your projects and will be notified about your presentations.</p>
        <img src={image3} class="mx-auto" alt="" width="250" height="250"/>
        </div>
        </div>
        </div>
        <br/>
        <footer class="page-footer font-small cyan darken-3" style={{backgroundColor:"black", marginLeft:"-120px", marginTop:"0px",height:"170px",marginRight:"-1000px", marginBottom:"-40px"}}>

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
