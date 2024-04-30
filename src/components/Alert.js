import React from 'react'

export default function Alert(props) {
  const capitalise=(word)=>{
    const lower =  word.toLowerCase();
   return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
   
  
   <div style={{"height":"45px"}}> 
     {props.alert && <div style={{'height':'50px'}}className={`alert alert-${props.alert.text} alert-dismissible fade show`} role="alert">
   <strong>{capitalise(props.alert.text)}: </strong>{props.alert.msg}
   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>}
  </div>
  
  )
}
