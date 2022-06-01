import { Link } from "react-router-dom";

import React, { Component } from 'react'


export default class UploadNavbar extends Component {
  render() {
    return (
      <div>



      <div style={{marginTop:"10px"}}>
      
            <h1 style={{background:'#000080', color:'white', marginLeft:'0'}}> <center>Admin Document Upload Page </center></h1>

                 <button className="btn btn-success" style={{marginLeft:'10px', marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
                 <a href="/DocumentSubHome" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                    <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                  </button>

        <table>
          <tr>
            <td>
                <button className="btn btn-success" style={{marginLeft:'110px', marginRight:'0px',padding:'50px 50px',backgroundColor:'#3895d3'}}>
                    <a className='btn btn-success' href='/AdminUpHome' style={{textDecoration:'none',backgroundColor:'#0147ab',color:'white',fontSize:'25px'}}>
                      <i class="fa-solid fa-cloud-arrow-up"></i>&nbsp; UPLOADS
                      </a>
                </button>
              </td>

              <td>
                <p style={{borderLeft:"6px solid #808080", height:'600px',marginLeft:'370px'}}></p>
              </td>

              <td>
                <button className="btn btn-success" style={{marginLeft:'400px', marginRight:'0px',padding:'50px 50px',backgroundColor:'#3895d3'}}>
                      <a className='btn btn-success' href='/AdminAdd' style={{textDecoration:'none',backgroundColor:'#0147ab',color:'white',fontSize:'25px'}}>
                        <i class="fa-regular fa-square-plus"></i>&nbsp; ADD
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


