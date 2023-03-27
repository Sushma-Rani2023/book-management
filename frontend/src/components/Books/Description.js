import { useLocation } from "react-router-dom"

function Desc(props){
    
    return(
<div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{props.bookName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{props.bookauthor}</h6>
    <p class="card-text">{props.bookDescription}</p>
  </div>
</div>)
}

export default Desc