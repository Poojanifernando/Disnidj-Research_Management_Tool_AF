import React, { Component } from 'react'
import adminSubmit from '../../public/adminSubmit.jpg';

export default class DocumentSubHome extends Component {
  render() {
    return (
        <div>
        <h1 style={{backgroundColor:'#000080', color:"white"}}><center>Document Submission Home</center> </h1>
        
          <br></br>

                   <button className="btn btn-success" 
                    style={{marginLeft:'10px',padding:'8px 8px',backgroundColor:'#3895d3', width:'200px'}}>
                    <a href="/adminHome" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'16px'}}> 
                    <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                    </button>

          <br></br>
          <div style={{marginLeft:'250px'}}><img src={adminSubmit} class="mx-auto" alt="evaluation" width="1000" height="500" /></div>

          <br></br> <br></br>  

          <table>

            <tr>
                <td>
                    <button className='btn btn-success' style={{marginLeft:'250px', backgroundColor:"#0147ab", width:'350px'}}>
                    <a href="/UploadNaviAdmin" style={{textDecoration:'none', color:'white', fontSize:"16px"}}> Admin Document Upload  </a>
                    </button>

                    <br></br> <br></br>

                </td>
                <td>
                    <button className='btn btn-success' style={{marginLeft:'450px', backgroundColor:"#0147ab",width:'350px'}}>
                    <a href="/TempNavbar" style={{textDecoration:'none', color:'white', fontSize:"16px"}}> Templates Submittions  </a>
                    </button>           
                <br></br> <br></br>
                </td>
            </tr>

          </table>
          


          

      </div>
    )
  }
}
