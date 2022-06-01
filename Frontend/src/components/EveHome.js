import React, { Component } from 'react'
import Evaluation from '../../public/Evaluation.jpg';

export default class EveHome extends Component {
  render() {
    return (
      <div>
        <h1 style={{backgroundColor:'#000080', color:"white"}}><center>Evaluation Home</center> </h1>
        
          <br></br>

                   <button className="btn btn-success" 
                    style={{marginLeft:'10px',padding:'8px 8px',backgroundColor:'#3895d3', width:'200px'}}>
                    <a href="/adminHome" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'16px'}}> 
                    <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                    </button>

          <br></br>
          <div style={{marginLeft:'250px'}}><img src={Evaluation} class="mx-auto" alt="evaluation" width="1100" height="500" /></div>

          <br></br> <br></br>  <br></br>

          <table>
            <tr>
              <td>
                <button className='btn btn-success' style={{marginLeft:'250px', backgroundColor:"#0147ab", width:'350px'}}>
                <a href="/supervEveHome" style={{textDecoration:'none', color:'white', fontSize:"16px"}}> Supervisor Evaluation </a>
                </button>  
                <br></br> <br></br>
              </td>
              <td>
                <button className='btn btn-success' style={{marginLeft:'450px', backgroundColor:"#0147ab",width:'350px'}}>
                <a href="/panelEveHome" style={{textDecoration:'none', color:'white', fontSize:"16px"}}> Panel Evaaluation </a>
                </button>           
              <br></br> <br></br>
             </td>
            </tr>
            <tr>
            <td>
            <button className='btn btn-success' style={{marginLeft:'250px'}}><a href="/UploadNaviAdmin" style={{textDecoration:'none', color:'white'}}> Admin Document Upload  </a></button>         
            <br></br> <br></br>
            </td>
           

            </tr>
            <tr>
            <button className='btn btn-success' style={{marginLeft:'250px'}}><a href="/TempNavbar" style={{textDecoration:'none', color:'white'}}> Templates Submittions  </a></button>         
            <br></br> <br></br>
            </tr>
          </table>
          


          

      </div>
    )
  }
}
