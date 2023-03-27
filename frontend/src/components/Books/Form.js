import { useState } from "react"
import axios from "../../axios"

function Add(props){

    const [book,setBook]=useState([])
    const handleform=(e)=>{
        setBook([
            ...book,
            [e.target.name]=e.target.value
        ])

    
    }

    const handlesubmit= async (e)=>{
        e.preventDefault();
        console.log(book)
         await axios.post('/book/create',book)
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

    <form className="form-horizontal" method="POST"  id="add_new_user_form" onSubmit={handlesubmit} >
    <div className='modal-body'>
     
      <div className="form-group row">
        <label for="name" className="col-md-3 control-label " >Book Name :</label>
        <div className="col-md-8">
          <input className="form-control " id="ename" name="bookName"  onChange={handleform}  required/>
        </div>
      </div>


      <div className="form-group row" >
       <label for="author" className="control-label col-md-3" >Author Name :</label>
       <div className="col-md-8">
         <input type="text" className="form-control" id="author" name="bookauthor" onChange={handleform}  required />
       </div>
     </div>

     <div className="form-group row" >
       <label for="price" className="control-label col-md-3" >Price:</label>
       <div className="col-md-8">
         <input type="number" className="form-control" id="price" name="bookprice" onChange={handleform}  required  />
       </div>
     </div>

     


      <div className="form-group row ">
        <label for="description" className="  control-label col-md-3" >Description :</label>
        <div className="col-md-8" style={{maxWidth:'450px'}}>
          <textarea className="form-control" id="description" rows={3} maxLength="150"  name="bookDescription" onChange={handleform}  required/>
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

export default Add