import { useState } from "react";
//import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const AdminAdd = () => {
  //const history = useHistory();
  const Navigate= useNavigate();
  const [name, setName] = useState("");

  const [pdf, setPdf] = useState([]);

  const upload = async (e) => {
    try {
      e.preventDefault();
 
      const data = new FormData();

     data.append("name", name);
      
      for (var x = 0; x < pdf.length; x++) {
        data.append("uploaded_Image", pdf[x]);
      }


      const res = await fetch(`http://localhost:8000/admin`, {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setName("");
        
        setPdf(null);
        
        Navigate.replace("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
              <button className="btn btn-success" style={{marginLeft:'10px', marginTop:'20px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
              <a href="/UploadNaviAdmin" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
              <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
              </button>

          <div style={{ Width: 500, margin: "auto" , marginTop:'70px',backgroundColor:'#0288d1'}}>
            {/* <pre>{file!=null && file.length}</pre> */}


            <form onSubmit={upload} encType="multipart/form-data" style={{ marginLeft:'400px'}} >
              <br></br>

              <h1 style={{color:"white"}} >Upload Your PDF Document HERE <i class="fa-solid fa-cloud-arrow-up"></i> !</h1>
              
              <br></br><br></br><br></br>
            
              <div className="form-group">  
                        <input type="text"  
                        placeholder="Give a name for the Uploading Document" 
                        style={{width:'500px',marginLeft:'80px'}}
                        value={name} required
                        onChange={e=>{setName(e.target.value)}}
                        className="form-control"/>
                    </div>
                    <br></br><br></br>
                    <div className="form-group">
              
                      <input type="file" multiple required filename="uploaded_Image"
                      style={{textDecoration:'none',backgroundColor:'#0147ab',color:'white',fontSize:'25px',width:'450px',marginLeft:'110px'}}
                      className="form-control-file" 
                      onChange={e => {setPdf(e.target.files)}}/>
                    </div>
                    <br></br><br></br><br></br><br></br>


                    <button class="btn btn-info"
                    style={{textDecoration:'none',color:'white',fontSize:'25px',width:'250px',marginLeft:'210px'}} 
                            type="submit" 
                            variant="primary"
                            size="lg">
                              <i class="fa-solid fa-file-pdf"></i>
                              &nbsp;Upload
                    </button>  
                  
            </form>
                    <br></br><br></br>
            
          </div>
    </div>
  );
};

export default AdminAdd;
