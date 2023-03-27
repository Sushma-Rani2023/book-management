import axios from "../../axios"
import { useState } from "react"

function Update(props){
    const [book,setBook]=useState([props.data])
    const handleform=(e)=>{
        setBook([
            ...book,
            [e.target.name]=e.target.value
        ])

    
    }

    const handlesubmit= async (e)=>{
        e.preventDefault();
        console.log(book)
         await axios.put(`/book/update/${props.data._id}`,book)
        .then(()=>console.log('created'))
        .catch((err)=>{console.log(err)})

        props.toggle()
        props.get()
    }

    return (
        <div>
        <div className="row main-row_header" style={{fontSize:'1.5rem'}}>
     <p className="col-md-12">Details of new Role</p>
   </div>

   
   <br/>

   <div>
   <div className="row" >
  <div className="col-md-12">

    <form className="form-horizontal" method="POST"  id="add_new_user_form">
    <div className='modal-body'>
     
      <div className="form-group row">
        <label for="rolename" className="col-md-3 control-label " >Name :</label>
        <div className="col-md-8">
          <input className="form-control " id="bookName" defaultValue={props.data.bookName} name="Name"  />
        </div>
      </div>


      <div className="form-group row" >
       <label for="rate" className="control-label col-md-3" >Price</label>
       <div className="col-md-8">
         <input type="number" className="form-control" id="rate" defaultValue={props.data.bookprice} name="bookprice"  />
       </div>
     </div>

     


      <div className="form-group row ">
        <label for="description" className="  control-label col-md-3" >Description :</label>
        <div className="col-md-8" style={{maxWidth:'450px'}}>
          <textarea className="form-control" id="description" rows={3} maxLength="150" defaultValue={props.data.bookDescription}  name="bookDescription" required/>
        </div>
      </div>
      
      

      <div className="form-group ">
        <div className="col-md-offset-3 col-md-3">
          <button type="submit" id="add_new_user_btn" className="btn btn-success pull-right single-click" >Add new Role </button>
        </div>
      </div>
      </div>
    </form>

  </div>
 
</div>

   </div>
</div>


    )
}

export default Update