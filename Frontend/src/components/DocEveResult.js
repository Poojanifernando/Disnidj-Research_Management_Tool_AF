import React, { Component } from 'react'
//import axios
import axios from 'axios';

export default class DocEveResult extends Component {

//initialize constructor to pass the props
constructor (props) {
    super(props);
    this.state={
      //initializing an array 
      GetAllposts:[]
    };
  }
  
 //calling the method after componenets render to the page
 componentDidMount(){
  this.retrievePanelEve();
}


  //get request method
  retrievePanelEve(){
      axios.get("http://localhost:8000/GetAlldetailssuper").then(res=>{
        console.log(res.data);
       
        if(res.data.success){
          this.setState({
            GetAllposts:res.data.existingDocs
          });
          console.log(this.state.GetAllposts)
        }
      })
  }

   
 
  

//search data according to name

filterData(GetAllposts,searchKey){
  const result =GetAllposts.filter((CheckOnePEv)=>
  CheckOnePEv.Groupname.toLowerCase().includes(searchKey) ||
  CheckOnePEv.Groupname.includes(searchKey)


  )

this.setState({GetAllposts:result})

}


handleSearchArea=(e)=>{

  const searchKey = e.currentTarget.value;
  
  axios.get("http://localhost:8000/GetAlldetailssuper").then(res=>{
  if(res.data.success){
  
    this.filterData(res.data.existingDocs,searchKey)
  }
});

}
 




  render() {
    return (
        <div>
          
         
        <div>
          <center>
          <h1 style={{background:'#000080', width:"800px", color:'white'}}> Document Evaluvation Results</h1>
          <br></br><br></br>
          </center>  


          <div className="col-lg-3 my-2 mb-2" >
          
          <input
          className="form-control" style={{padding:'17px 50px', marginLeft:'800px'}}
          type="search"
          placeholder="Enter the Group Name"
          name="searchQuery"
          onChange={this.handleSearchArea}>
            </input>
        
            
            <p style={{width:'800px',marginLeft:'800px'}}>  *you can search the group here</p>
            
          </div>





          <table className='table' style={{width:'1000px', marginLeft:"250px"}}>
            <tr style={{fontSize:"25px"}}>
              <th scope='col' >No</th>
              <th scope='col'> Group Name </th>
              <th scope='col'>Total Marks</th>
            </tr>
            <tbody>
            {this.state.GetAllposts.map((GetAllposts,index)=>(
                <tr key ={index}>
                  <th scope='row'>{index+1}</th>
                  
                  <td><a href={`/DocEveOneResult/${GetAllposts._id}`} style={{TextDecoration:'none'}}>{GetAllposts.Groupname} </a> </td>  
                  <td>{GetAllposts.Total}</td> 

                 
                </tr>
                ))}
         </tbody>

         </table>  
         <table>
           <tr>
           
            <td>
              <button className="btn btn-success" 
              style={{marginLeft:'1150px',padding:'8px 8px',backgroundColor:'#3895d3'}}>
                <a href="/EvaluationResult" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'16px'}}> 
                <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
              </button>
            </td>
          
          </tr>
         </table>
       
             

           </div>
         
         
   
          
  


  </div>
    )
  }
}
