import { useState } from "react";
//import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const StudentAdd = () => {
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


      const res = await fetch(`http://localhost:8000/stdSubmit`, {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setName("");
        
        setPdf(null);
        
        Navigate.replace("/stdSubmit");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      {/* <pre>{file!=null && file.length}</pre> */}
      <form onSubmit={upload} encType="multipart/form-data" >
  <div className="form-group">  
  <input type="text"  placeholder="Name" value={name} required
   onChange={e=>{setName(e.target.value)}}
   className="form-control"/>
   </div>
   
Upload Pdf
<div className="form-group">
    <input type="file" multiple required filename="uploaded_Image"
     className="form-control-file" 
    onChange={e => {setPdf(e.target.files)}}/>
</div>

  <button className="mt-2" 
  type="submit" 
  variant="primary"
   size="lg">
   Upload
   </button>      
  </form>

      
    </div>
  );
};

export default StudentAdd;
