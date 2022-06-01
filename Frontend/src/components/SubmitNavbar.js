import { Link } from "react-router-dom";
import submit from '../../public/submit.jpg';

import React, { Component } from 'react'

export default class SubmitNavbar extends Component {
  render() {
    return (
      <div>

            <div style={{marginTop:"10px"}}>

            <h1 style={{background:'#000080', color:'white', marginLeft:'0'}}> <center>Student Document Submission Page </center></h1>

                <button className="btn btn-success" style={{marginLeft:'10px', marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
                <a href="/" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                    <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                  </button>

                  <div style={{marginLeft:'250px'}}><img src={submit} class="mx-auto" alt="evaluation" width="900" height="500" /></div>
          
          
          <table>
            <tr>
            <td>
                <button className="btn btn-success" style={{marginLeft:'110px', marginRight:'0px',padding:'30px 30px',backgroundColor:'#3895d3'}}>
                    <a className='btn btn-success' href='/StudentSubHome' style={{textDecoration:'none',backgroundColor:'#0147ab',color:'white',fontSize:'25px'}}>
                      <i class="fa-solid fa-cloud-arrow-up"></i>&nbsp; SUBMITS
                      </a>
                </button>
              </td>

              <td>
                <button className="btn btn-success" style={{marginLeft:'750px', marginRight:'0px',padding:'35px 35px',backgroundColor:'#3895d3'}}>
                      <a className='btn btn-success' href='/StudentAdd' style={{textDecoration:'none',backgroundColor:'#0147ab',color:'white',fontSize:'25px'}}>
                      <i class="fa-solid fa-file-circle-plus"></i>&nbsp; ADD SUBMISSIONS
                      </a>   
                </button>
              </td>
            </tr>
          </table>
        </div>   



      </div>
    )
  }
}



