import React , {useState} from 'react';
import { Link , useNavigate } from "react-router-dom";
import {RegisterCustomer} from '../services/AuthServices';

const Register = () => {

  const navigate = useNavigate();

  const [Name, setName] = useState('');
  const [ID, setID] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Password, setPassword] = useState('');

 
 

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleID = (e) => {
    setID(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
 
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Name === '' || ID === '' || Email === ''|| PhoneNumber === '' || Password === '' ) {
        alert("Fill all the data");
    } else {
        let newdata = {
          
          Name:Name,
          ID:ID,
          Email:Email,
          PhoneNumber:PhoneNumber,
          Password:Password
        }
        let cusdata =  await RegisterCustomer(newdata);
        console.log("return data",cusdata);
        localStorage.setItem("token",cusdata.data.token);
        localStorage.setItem("userRole",cusdata.data.userRole);
        navigate('/Login');
    }
  };
 


  return (
    <div>
            <center>
      <div style={{marginTop:"30px"}}>
          <center><h1 style={{color:"purple"}}><b>WELCOME TO SLIIT RESEAECH PROJECT MANAGEMENT</b></h1></center> 
        
        
        </div>
        <br/>
          
        </center>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                   <a className="navbar-brand" href="/Home">Home</a>
                   <a className="navbar-brand" href="/AdminLogin">Admin Login</a>
                   <a className="navbar-brand" href="/StaffLogin">Staff Login</a>
                   <a className="navbar-brand" href="/Login">Student Login</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div className="navbar-nav">

                
                   
                  {/* students' Pages */}
                  <a style={{display:localStorage.getItem("userRole") == "user" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">student</a>  
                  <a style={{display:localStorage.getItem("userRole") == "user" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">student</a>  
                  <a style={{display:localStorage.getItem("userRole") == "user" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page"> student</a>   
                  <a style={{display:localStorage.getItem("userRole") == "user" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">student</a> 
                  {/* staff' Pages */}
                  <a style={{display:localStorage.getItem("userRole") == "staff" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">staff</a>  
                  <a style={{display:localStorage.getItem("userRole") == "staff" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">staff</a>  
                  <a style={{display:localStorage.getItem("userRole") == "staff" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">staff</a> 
                  <a style={{display:localStorage.getItem("userRole") == "staff" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">staff</a> 

                   {/* admin' Pages */}
                   <a style={{display:localStorage.getItem("userRole") == "admin" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">admin</a>  
                  <a style={{display:localStorage.getItem("userRole") == "admin" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">admin</a>  
                  <a style={{display:localStorage.getItem("userRole") == "admin" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">admin</a> 
                  <a style={{display:localStorage.getItem("userRole") == "admin" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">admin</a> 
                 </div>
                </div>
             </div>
          </nav>
      <div>
        <br/><br/>
        <center>
        <table width = "500">
            <tr>
                <th>
              <center>
              <h1 style={{color:""}}>Registration</h1></center>
              <br/><br/>
              <form>
             
                  
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>Name: </label>
                            <input type="text"
                            className="form-control"
                            value={Name}
                            onChange={handleName}
                            placeholder="enter name as in sliit id"
                        
                                />
                             </div>

                             <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>Sliit ID: </label>
                            <input type="text"
                            className="form-control"
                            value={ID}
                            onChange={handleID}
                            placeholder="enter sliit id"
                        
                                />
                             </div>

                             <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>  Email Address: </label>
                            <input type="text"
                            className="form-control"
                            value={Email}
                            onChange={handleEmail}
                            placeholder="enter sliit id"
                        
                                />
                             </div>


                             <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>  Contact Number: </label>
                            <input type="text"
                            className="form-control"
                            value={PhoneNumber}
                            onChange={handlePhoneNumber}
                            placeholder="enter a contact number"
                        
                                />
                             </div>
          

                             <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>  Password: </label>
                            <input type="text"
                            className="form-control"
                            value={Password}
                            onChange={handlePassword}
                            placeholder="create a password(should be at least 6 charactors)"
                        
                                />
                             </div>
               
          
          
                              <center>
                              <button onClick={handleSubmit} className="btn btn-primary btn-lg active" type="submit">
                                 Register
                              </button>
                              </center>
                              </form>        
                              <br/>
                              <p className="link">
                                Already have an account? <Link to="/Login" >Sign Up</Link>
                              </p> 
   
            </th>
            </tr>
            </table>
            </center>
      </div>
    </div>
  )
};

export default Register;