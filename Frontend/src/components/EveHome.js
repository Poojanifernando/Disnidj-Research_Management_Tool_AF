import React, { Component } from 'react'

export default class EveHome extends Component {
  render() {
    return (
      <div><h1> Evaluation Home</h1>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <table>
            <tr>
              <td>
             <button className='btn btn-success' style={{marginLeft:'250px'}}><a href="/supervEveHome" style={{textDecoration:'none', color:'white'}}> Supervisor Evaluation</a></button>         
             <br></br> <br></br>
              </td>
              <td>
              <button className='btn btn-success' style={{marginLeft:'250px'}}><a href="/panelEveHome" style={{textDecoration:'none', color:'white'}}> Panel Evaaluation  </a></button>         
              <br></br> <br></br>
             </td>
            </tr>
            <tr>
            <td>
            <button className='btn btn-success' style={{marginLeft:'250px'}}><a href="/UploadNaviAdmin" style={{textDecoration:'none', color:'white'}}> Admin Document Upload  </a></button>         
            <br></br> <br></br>
            </td>
            <td>
            <button className='btn btn-success' style={{marginLeft:'250px'}}><a href="/SubmitNavbar" style={{textDecoration:'none', color:'white'}}> Student Submittions  </a></button>         
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
