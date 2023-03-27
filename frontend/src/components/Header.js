import { Navigate, NavLink,useLocation, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "../axios";
import Popup from "./Popup";
import Form from "./Books/Form"
import Update from "./Books/Update";

function Header(props){
    const [modal,setModal]=useState(false)
    const[update,setUpdate]=useState(false)
    const[data,setData]=useState([])
    const location=useLocation()
    const navigate =useNavigate()
    const getBooks= async ()=>{
        const res=await axios.get('/book/info')
        console.log(res)
        setData(res.data.Book)
    }


    const Delete= (id) =>{

        axios.delete(`/book/delete/${id}`)
    }
const toggle=()=>{setModal(!modal)}
const toggle1=()=>{setUpdate(!update)}

    return(
    
        
<>

{modal && <Popup toggle={toggle} > <Form  id={location.state.data._id} toggle={toggle} getBooks={getBooks}/> </Popup>
}
{update && <Popup toggle={toggle1} ><Update data={update} toggle={toggle1} getBooks={getBooks} /></Popup> }
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" style={{justifyContent:'flex'}}>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">{location.state.data.email}</a>
        </li>
        
    
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Logout</a>
        </li>
        
    
      </ul>
      
      
      
    </div>
  </div>
</nav>
<div style={{height:'75px'}}>

<button type="button" class="btn btn-info" onClick={()=>setModal(!modal)} style={{marginLeft:'12px',marginTop:'12px'}}>Add</button>

</div>

<div>
<div  style={{width:'100%',marginTop:'45px'}}>
  <table className="table table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
    {
      data.map((data,index) => {
         return (<tr key={index}>
        <td><button onClick={()=>navigate("./Description" , {state:{data:data}})}>{data.bookName}</button></td>
        <td style={{maxWidth:'200px',height:'60px',wordWrap:'break-word'}}>{data.bookDescription}</td>
        <td>{data.bookprice}</td>
        <td> <button className="btn btn-outline-success" size="xs" onClick={() => {
           
              setUpdate(data)
            }} >Edit</button>
        <button className="btn btn-outline-danger" size="xs" onClick={()=>Delete(data._id)} >Del</button></td>
        </tr>)
 
      }
      )
    } 
    </tbody>
  </table>
</div>
</div>


</>
    )

}

export default Header