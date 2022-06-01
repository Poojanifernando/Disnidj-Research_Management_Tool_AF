import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TemplateDownload = () => {
  const [users, setUsers] = useState();

 useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:8000/Tempadmin`);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
        <h1 style={{backgroundColor:'#000080', color:"white"}}><center>Download Templates</center>  </h1>
        <br></br><br></br>

        <button className="btn btn-success" style={{marginLeft:'10px', marginTop:'20px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
        <a href="/STDdownloads" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
        <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
        </button>

     <div className="row" style={{marginLeft:'20px'}}>
    


    {users?.map((user) => (
      <div className="col-md-3 card me-3 mt-2 p-0 mb-2 d-flex" style={{backgroundColor:'#09c0e2'}} key={user._id}>

        <h2>{user.name}</h2>
        <a href={user.pdf} download>Click to download</a>

      </div>
    ))}

  </div>

</div>  
  );
};

export default TemplateDownload;
