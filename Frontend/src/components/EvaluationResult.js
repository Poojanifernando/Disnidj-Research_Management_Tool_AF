import React, { Component } from 'react'
import Result from '../../public/Result.jpg';

export default class EvaluationResult extends Component {
  render() {
    return (
      
        <div>
        <h1 style={{backgroundColor:'#000080', color:"white"}}><center>Evaluation Results </center> </h1>
        
          <br></br>

                   <button className="btn btn-success" 
                    style={{marginLeft:'10px',padding:'8px 8px',backgroundColor:'#3895d3', width:'200px'}}>
                    <a href="/UHome" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'16px'}}> 
                    <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                    </button>

          <br></br>
          <div style={{marginLeft:'250px'}}><img src={Result} class="mx-auto" alt="result" width="1000" height="500" /></div>

          <br></br> <br></br>  <br></br>

          <table>
            <tr>
              <td>
                <button className='btn btn-success' style={{marginLeft:'250px', backgroundColor:"#0147ab", width:'350px'}}>
                <a href="/DocEveResult" style={{textDecoration:'none', color:'white', fontSize:"16px"}}> Document Evaluation Results </a>
                </button>  
                <br></br> <br></br>
              </td>
              <td>
                <button className='btn btn-success' style={{marginLeft:'450px', backgroundColor:"#0147ab",width:'350px'}}>
                <a href="/PreseEveResult" style={{textDecoration:'none', color:'white', fontSize:"16px"}}> Presentation Evaluation Results </a>
                </button>           
              <br></br> <br></br>
             </td>
            </tr>
          
          </table>
          


          

      </div>

    )
  }
}
