import React from "react";
import {useState ,useEffect }from 'react'
import { Link , useNavigate } from "react-router-dom";
import { GetallUsers, DeleteUser } from "../services/AuthServices";

const Viewallusers = () => {

    const navigate = useNavigate();

    const handleSubmit= ()=>{
      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
      navigate("/Login");
    }

	const [users , setusers] = useState([])
  
	const GetRooms = async () =>{
        let data = await GetallUsers();
        let cusdata =[];
        console.log("All Users",data?.data);
         data?.data.map((users)=>{
            if(users?.userRole == "user")
            {
                cusdata.push(users);
            }
        });
        setusers(cusdata);
    }
  

	useEffect(() => { 
        GetRooms();
   },[])
  


   
   

	return (
		<div style={{ textAlign: "center" }}>
             <div style={{marginTop:"30px"}}>
                  
              
            </div>
            <br/>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                   <a className="navbar-brand" href="/Home">Home</a>
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
             <button onClick={handleSubmit} className="btn btn-primary" type="submit" style={{float:"right"}}>
                      Logout
                  </button>
          </nav>
			<br/>
			<br/>
			<div>
               
                <div >
                    <center >
                        <b style={{fontSize:"48px" , textDecoration:"underline"}}>Registed Users Details </b><br/><br/>
                    </center>
                  
                    <br/><br/><br/>
                    <table className="table table-striped table-success">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>SLIIT ID</th>
                            <th>Sliit Email Address</th>
                            <th>Contact Number</th>
                            <th>Password</th>
                            <th>Delete user</th>
                          
                            </tr>
                        </thead>  
                        <tbody>
                            {users.map((users,index)=>(
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{users?.Name}</td>
                                    <td>{users?.ID}</td>
                                    <td>{users?.Email}</td>
                                    <td>{users?.PhoneNumber}</td>
                                    <td>{users?.Password}</td>


                                    <td>  <a className="btn btn-primary" style = {{textDecoration:'none',color:'white'}}  href="/"  >
                               &nbsp;Delete
                                </a></td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
			</div>
		</div>
	);
};


export default Viewallusers;